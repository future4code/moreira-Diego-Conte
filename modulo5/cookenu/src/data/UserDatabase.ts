import { User } from "../entities/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User): Promise<void> {
    try {
      await BaseDatabase.connection("Cookenu_Users").insert({
        id: user.getId(),
        name: user.getname(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("Cookenu_Users")
        .select("*")
        .where({ email });

      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserById(id: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("Cookenu_Users")
        .select("id", "name", "email")
        .where({ id });

      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
