import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export const populate = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 422;
      throw new Error("Please enter a valid token.");
    }

    const recipeDatabase = new RecipeDatabase();
    await recipeDatabase.migrations();

    res.status(200).send({Message: "DB successfully populated."});
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
