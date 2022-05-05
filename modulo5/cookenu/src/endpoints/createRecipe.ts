import { Request, Response } from "express";
import { idGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipes } from "../entities/recipes";
import moment from "moment";

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const { title, description } = req.body;

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 422;
      throw new Error("Please enter a valid token.");
    }

    if (!title || !description) {
      res.statusCode = 422;
      throw new Error(
        "Please, enter a title and a description. Missing values."
      );
    }

    const generatingId = new idGenerator();
    const id = generatingId.generate();

    const createdAt: string = moment().format("DD/MM/YYYY");
    
    const recipe: Recipes = new Recipes(id, title, description, createdAt, tokenData.id);
    const recipeDatabase = new RecipeDatabase();
    await recipeDatabase.createRecipe(recipe);

    res.status(201).send({ Message: "Recipe successfully created." });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res
        .status(500)
        .send({ message: error.sqlMessage || "Internal server error" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
