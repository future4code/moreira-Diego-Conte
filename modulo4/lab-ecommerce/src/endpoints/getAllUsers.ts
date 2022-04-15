import { Request, Response } from "express";
import { User } from "../types";
import getUsers from "../services/getUsers";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response: User[] = await getUsers();

    if (response.length < 1) {
      throw new Error("No users found.");
    }

    res.status(200).send({ users: response });
  } catch (error: any) {
    switch (error.message) {
      case "No users found.":
        res.status(200);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error });
  }
};

export default getAllUsers;
