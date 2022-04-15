import { Request, Response } from "express";
import { User } from "../types";
import getUsers from "../services/getUsers";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response: User[] = await getUsers();
    let listUsers: string[] = [];

    if (response.length !== 0) {
      listUsers = response.map((n) => {
        return n.name;
      });
    } else {
      throw new Error(`No user found.`);
    }

    res.status(200).send(listUsers);
  } catch (error: any) {
    switch (error.message) {
      case `No user found.`:
        res.status(200);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error });
  }
};

export default getAllUsers;
