import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const userId = req.params.id;

    if (!token) {
      res.statusCode = 422;
      throw new Error("Please enter a token.");
    }

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Please enter a valid token.");
    }

    if (tokenData.role !== "ADMIN") {
      res.statusCode = 401;
      throw new Error("Access denied. Please switch to an administrator account.");
    }

    const userDatabase = new UserDatabase();
    const userData = await userDatabase.getUserById(userId);

    res.status(200).send({ userData });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
