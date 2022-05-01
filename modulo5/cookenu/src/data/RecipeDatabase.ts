import { Feed } from "../entities/feed";
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
        id_creator: recipe.getCreatorId(),
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

  public async getFeed(id: string): Promise<Feed> {
    const data = await BaseDatabase.connection.raw(
      `SELECT 
      r.id,
      r.title,
      r.description,
      r.createdAt,
      u.id AS userId,
      u.name AS userName
      FROM Cookenu_Recipes r
      JOIN Cookenu_UserFollowingConnection f ON r.id_creator = f.followed_id
      JOIN Cookenu_Users u ON f.followed_id = u.id
      WHERE f.follower_id = "${id}" 
      ORDER BY createdAt DESC`
    );
   
    return data[0];
  }
}
