import IUserData from "../model/InterfaceUserData";
import User from "../model/User";
import UserRelationships from "../model/UserFriendships";
import findUserByEmail from "../types/findUserByEmail";
import findUserById from "../types/findUserById";
import BaseDatabase from "./BaseDatabase";

export default class UserData extends BaseDatabase implements IUserData {
  protected TABLE_1_NAME = "labook_users";
  protected TABLE_2_NAME = "labook_UserFollowingConnections";

  insert = async (user: User): Promise<void> => {
    try {
      await UserData.connection(this.TABLE_1_NAME).insert(user);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  findUserByEmail = async (email: string): Promise<User> => {
    try {
      const queryResult: findUserByEmail = await UserData.connection(
        this.TABLE_1_NAME
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

  findUserById = async (id: string): Promise<User> => {
    try {
      const queryResult: findUserById = await UserData.connection(
        this.TABLE_1_NAME
      )
        .select()
        .where({ id });

      return queryResult[0] && User.toUserModel(queryResult[0]);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  createFriendship = async (ids: UserRelationships): Promise<void> => {
    try {
      await UserData.connection(this.TABLE_2_NAME).insert(ids);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  getFriendship = async (
    ids: UserRelationships
  ): Promise<UserRelationships> => {
    try {
      const queryResult = await UserData.connection(this.TABLE_2_NAME)
        .select()
        .where({
          follower_id: ids.getFollowerId(),
          followed_id: ids.getFollowedId(),
        });

      return (
        queryResult[0] && UserRelationships.toUserFriendship(queryResult[0])
      );
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  deleteFriendship = async (ids: UserRelationships): Promise<void> => {
    try {
      await UserData.connection(this.TABLE_2_NAME).delete().where({
        follower_id: ids.getFollowerId(),
        followed_id: ids.getFollowedId(),
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}
