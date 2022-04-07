import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

/* EXERCÍCIO 1

CREATE TABLE Rating ( 
    id VARCHAR(255) PRIMARY KEY, 
    comment TEXT NOT NULL, 
    ratING FLOAT NOT NULL, 
    movie_id VARCHAR(255), 
    FOREIGN KEY (movie_id) REFERENCES Movie(id) 
);

Exercício 1.a
A chave estrangeira relaciona elementos comuns dispostos em tabelas diversas e os compara.

Exercício 1.b
*/