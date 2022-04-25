import { Request, Response } from "express";
import { selectPages } from "../data/functions";

export const getUsersByPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let page: number = Number(req.query.page);
    let size = 4;
    let offset = size * (page - 1);
    const users = await selectPages(size, offset);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found.");
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
