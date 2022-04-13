import { Request, Response } from "express";
import app from "../app";
import { orderedUsers } from "../data/functions";



export const getOrderedUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let sort: string = (req.query.sort as string)
    ? (req.query.sort as string)
    : "email";
  let order: string = (req.query.order as string)
    ? (req.query.order as string)
    : ("email" as string);

  try {
    if (sort !== "name" && sort !== "type") {
      sort = "email";
    }

    if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
      order = "ASC";
    }

    const users = await orderedUsers(sort, order);

    if (!users.length) {
      throw new Error("No user found.");
    }

    res.status(200).send(users);
  } catch (error: any) {
    switch (error.message) {
      case "No user found.":
        res.status(200);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};
