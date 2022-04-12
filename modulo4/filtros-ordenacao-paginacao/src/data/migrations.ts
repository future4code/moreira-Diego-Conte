import { connection } from "./connection";
// import users from "./users.json"
// import recipes from "./recipes.json"

// const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () =>
  connection.raw(`

    CREATE TABLE IF NOT EXISTS aula48_exercicio(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        type VARCHAR(255) NOT NULL
        );
 
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (1,'Soter','soter@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (2,'João','joao@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (3,'Paula','paula@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (4,'Amanda','amanda@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (5,'Darvas','darvas@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (6,'Severo','severo@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (7,'Caio','caio@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (8,'Chijo','chijo@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (9,'Lais','lais@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (10,'Bruno','bruno@labenu','Teacher');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (11,'Luciano','luciano@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (12,'Miau','miau@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (13,'Sekine','sekine@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (14,'Nathalia','nathalia@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (15,'Amanda','amandaop@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (16,'Rebeca','rebeca@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (17,'Jean','jean@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (18,'Vitória','vitoria@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (19,'Fernanda','fernanda@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (20,'Tainah','tainah@labenu','Operations');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (21,'Aline','aline@labenu','CX');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (22,'Nathalia','nathaliacx@labenu','CX');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (23,'Layla','layla@labenu','CX');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (24,'Jonathan','jonathan@labenu','CX');
    INSERT INTO aula48_exercicio ("id", "name", "emai","type") VALUES (25,'Maju','maju@labenu','CX');
   `);
