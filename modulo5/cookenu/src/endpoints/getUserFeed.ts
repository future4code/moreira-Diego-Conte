import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import AuthenticationData from "../entities/authenticationData";
import { Feed } from "../entities/feed";
import { Authenticator } from "../services/Authenticator";

export const getUserFeed = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization as string;

    if (!token) {
      res.statusCode = 422;
      throw new Error("Please enter a token.");
    }

    const authenticator: Authenticator = new Authenticator();
    const tokenData: AuthenticationData = authenticator.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("User not found. Please enter a valid token.");
    }

    const recipeDatabase = new RecipeDatabase();
    const feed = await recipeDatabase.getFeed(tokenData.id);

    if (!feed) {
      res.statusCode = 404;
      throw new Error("No recipes found.");
    }

    res.status(200).send({ recipes: feed });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
