import BaseDatabase from "./BaseDatabase";

export default class Migrations extends BaseDatabase {
  public static printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
  };

  public static createTables = async () => {
    Migrations.connection
      .raw(
        `
        CREATE TABLE IF NOT EXISTS LAMA_Bands (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            music_genre VARCHAR(255) NOT NULL,
            responsible VARCHAR(255) UNIQUE NOT NULL 
        );

        CREATE TABLE IF NOT EXISTS LAMA_Shows (
            id VARCHAR(255) PRIMARY KEY,
            week_day VARCHAR(255) NOT NULL,
            start_time INT NOT NULL,
            end_time INT NOT NULL,
            band_id VARCHAR(255) NOT NULL,
            FOREIGN KEY(band_id) REFERENCES LAMA_Bands(id)
        );

        CREATE TABLE IF NOT EXISTS LAMA_Users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
        );
        `
      )
      .then(() => {
        console.log("Migration successfully completed.");
      })
      .catch(Migrations.printError);
  };
}

Migrations.createTables();
