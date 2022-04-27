import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    if (!token) {
      res.statusCode = 422;
      throw new Error("Please enter a token.");
    }

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 422;
      throw new Error("Please enter a valid token.");
    }

    const userDatabase = new UserDatabase();
    const userData = await userDatabase.getUserById(tokenData.id);

    res.status(200).send({ userData });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
