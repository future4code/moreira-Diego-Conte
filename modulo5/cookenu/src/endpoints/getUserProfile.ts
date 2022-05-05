import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/user";
import AuthenticationData from "../entities/authenticationData";

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    if (!token) {
      res.statusCode = 422;
      throw new Error("Please enter a token.");
    }

    const authenticator: Authenticator = new Authenticator();
    const tokenData: AuthenticationData = authenticator.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 422;
      throw new Error("Please enter a valid token.");
    }

    const userDatabase: UserDatabase = new UserDatabase();
    const userData: User = await userDatabase.getUserById(tokenData.id);

    if(!userData){
      res.statusCode = 404;
      throw new Error("No user found.");
    }

    res.status(200).send({ userData });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
