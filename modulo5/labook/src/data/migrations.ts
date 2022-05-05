import { BaseDatabase } from "./BaseDatabase";

export default class Migrations extends BaseDatabase {
  static migrations = async () => {
    Migrations.connection
      .raw(
        `
            CREATE TABLE IF NOT EXISTS diego_users(
                 id VARCHAR(255) PRIMARY KEY,
                 name VARCHAR(255) NOT NULL,
                 email VARCHAR(255) UNIQUE NOT NULL,
                 password VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS diego_posts(
                 id VARCHAR(255) PRIMARY KEY,
                 photo VARCHAR(255) NOT NULL,
                 description VARCHAR(255) NOT NULL,
                 type ENUM("normal","event") DEFAULT "normal",
                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                 author_id VARCHAR(255),
                 FOREIGN KEY (author_id) REFERENCES labook_users (id)
            );
        `
      )
      .then(console.log)
      .catch(console.log);
  };
}

Migrations.migrations();

