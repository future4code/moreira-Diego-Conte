import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection
    .insert({
      //   id: Date.now() + Math.random(),
      name,
      nickname,
      email,
    })
    .into("TodoListUsers");
};

export const getUser = async (id: number): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM TodoListUsers WHERE id = '${id}'
    `);
  return result[0];
};

export const editUser = async (
  id: number,
  name: string,
  nickname: string
): Promise<void> => {
  await connection("TodoListUsers")
    .update({
      name,
      nickname,
    })
    .where("id", id);
};

export const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: number
): Promise<any> => {
  await connection("TodoListTasks").insert({
    title,
    description,
    limitDate,
    creatorUserId
  });
};

export const getTask = async (id: number): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM TodoListTasks WHERE id = '${id}'
    `);
  return result;
};
