import { User } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User) {
    await BaseDatabase.connection("Architecture_Users").insert({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    });
  }

  public async getUserByEmail(email: string) {
    const user = await BaseDatabase.connection("Architecture_Users")
      .select("*")
      .where({ email });

    return user[0] && User.toUserModel(user[0]);
  }

  public async getUserById(id: string) {
    const user = await BaseDatabase.connection("Architecture_Users")
      .select("id", "name", "email")
      .where({ id });

    return user[0] && User.toUserModel(user[0]);
  }

  public async getAllUsers() {
    const users = await BaseDatabase.connection("Architecture_Users")
    .select("*");

    return users;
  }

  public async deleteUserById(id: string) {
    await BaseDatabase.connection("Architecture_Users")
      .delete()
      .where({ id });
  }
}
