import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { UsersConnections } from "../data/UsersConnections";
import AuthenticationData from "../entities/authenticationData";
import { Authenticator } from "../services/Authenticator";

export const followUser = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization as string;
    const userToFollowId: string = req.body.userToFollowId as string;

    if (!token || !userToFollowId) {
      res.statusCode = 422;
      throw new Error("Please enter a token.");
    }

    const authenticator: Authenticator = new Authenticator();
    const tokenData: AuthenticationData = authenticator.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("User not found. Please enter a valid token.");
    }

    const userDatabase = new UserDatabase();
    const userToFollowData = await userDatabase.getUserById(userToFollowId);

    if (!userToFollowData) {
      res.statusCode = 401;
      throw new Error("User not found. Please enter a valid token.");
    }

    const usersConnections: UsersConnections = new UsersConnections();
    const checkUserConnections = await usersConnections.checkConnection(
      tokenData.id,
      userToFollowId
    );

    if (checkUserConnections.length > 0) {
      res.statusCode = 200;
      throw new Error("You are already following this user.");
    }

    await usersConnections.followUsers(tokenData.id, userToFollowId);

    res.status(200).send({ message: "Followed successfuly." });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
