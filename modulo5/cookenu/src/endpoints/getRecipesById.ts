import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { RecipeDatabase } from "../data/RecipeDatabase";

export const getRecipesById = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const recipeId = req.params.id as string;

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

    const recipeDatabase = new RecipeDatabase();
    const recipeData = await recipeDatabase.getRecipeById(recipeId);

    res.status(200).send(recipeData);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
