import { Recipes } from "../entities/recipes";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  public async createRecipe(recipe: Recipes): Promise<void> {
    try {
      await BaseDatabase.connection("Cookenu_Recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        createdAt: recipe.getCreatedAt(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getRecipeById(id: string): Promise<Recipes> {
    try {
      const recipe = await BaseDatabase.connection("Cookenu_Recipes")
        .select("*")
        .where({ id });

      return recipe[0] && Recipes.toRecipesModel(recipe[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
