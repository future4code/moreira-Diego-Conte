import IUserData from "../model/InterfaceUserData";
import User from "../model/User";
import FindByEmailResponse from "../types/findByEmailResponse";
import { BaseDatabase } from "./BaseDatabase";

export default class UserData extends BaseDatabase implements IUserData {
  protected TABLE_NAME = "labook_users";

  insert = async (user: User) => {
    try {
      await UserData.connection(this.TABLE_NAME).insert(user);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  findByEmail = async (email: string): Promise<User> => {
    try {
      const queryResult: FindByEmailResponse = await UserData.connection(
        this.TABLE_NAME
      )
        .select()
        .where({ email });

      return queryResult[0] && User.toUserModel(queryResult[0]);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}
