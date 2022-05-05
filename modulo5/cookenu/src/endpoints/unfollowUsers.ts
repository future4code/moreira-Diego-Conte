import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { UsersConnections } from "../data/UsersConnections";
import AuthenticationData from "../entities/authenticationData";
import { Authenticator } from "../services/Authenticator";

export const unfollowUser = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization as string;
    const userToUnfollowId: string = req.body.userToUnfollowId as string;

    if (!token || !userToUnfollowId) {
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
    const userToUnfollowData = await userDatabase.getUserById(userToUnfollowId);

    if (!userToUnfollowData) {
      res.statusCode = 401;
      throw new Error("User not found. Please enter a valid token.");
    }

    const usersConnections: UsersConnections = new UsersConnections();
    const checkUserConnections = await usersConnections.checkConnection(
      tokenData.id,
      userToUnfollowId
    );

    if (checkUserConnections.length < 1) {
      res.statusCode = 200;
      throw new Error("You are not following this user. Unable to unfollow.");
    }

    await usersConnections.unfollowUsers(tokenData.id, userToUnfollowId);

    res.status(200).send({ message: "Unfollowed successfuly." });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
