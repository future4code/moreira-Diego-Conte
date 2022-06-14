import BaseDatabase from "./BaseDatabase";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

export default class Migrations extends BaseDatabase {
  static migrations = async () => {
    Migrations.connection
      .raw(
        `
        CREATE TABLE User_Arq(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(255) DEFAULT "NORMAL"
            )
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
