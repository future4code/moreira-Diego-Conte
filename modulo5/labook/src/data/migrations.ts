import BaseDatabase from "./BaseDatabase";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

export default class Migrations extends BaseDatabase {
  static migrations = async () => {
    Migrations.connection
      .raw(
        `
            CREATE TABLE IF NOT EXISTS labook_users(
                 id VARCHAR(255) PRIMARY KEY,
                 name VARCHAR(255) NOT NULL,
                 email VARCHAR(255) UNIQUE NOT NULL,
                 password VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS labook_posts(
                 id VARCHAR(255) PRIMARY KEY,
                 photo VARCHAR(255) NOT NULL,
                 description VARCHAR(255) NOT NULL,
                 type ENUM("normal","event") DEFAULT "normal",
                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                 author_id VARCHAR(255),
                 FOREIGN KEY (author_id) REFERENCES labook_users (id)
            );

            CREATE TABLE IF NOT EXISTS labook_UserFollowingConnections(
              follower_id VARCHAR(255) NOT NULL,
              followed_id VARCHAR(255) NOT NULL,
              FOREIGN KEY (follower_id) REFERENCES labook_users(id),
              FOREIGN KEY (followed_id) REFERENCES labook_users(id)
         );
        `
      )
      .then(() => {
        console.log("Migration successfully completed.");
      })
      .catch(printError);
  };

  static closeConnection = () => {
    Migrations.connection.destroy();
  };
}

Migrations.migrations().finally(Migrations.closeConnection);
