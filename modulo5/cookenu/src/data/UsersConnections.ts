import { BaseDatabase } from "./BaseDatabase";

export class UsersConnections extends BaseDatabase {
  public async checkConnection(
    followerId: string,
    followedId: string
  ): Promise<any> {
    try {
      const userConnection = await BaseDatabase.connection(
        "Cookenu_UserFollowingConnection"
      )
        .select("*")
        .where({ follower_id: followerId })
        .andWhere({ followed_id: followedId });

      return userConnection;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async followUsers(
    followerId: string,
    followedId: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection("Cookenu_UserFollowingConnection").insert({
        follower_id: followerId,
        followed_id: followedId,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async unfollowUsers(
    followerId: string,
    followedId: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection("Cookenu_UserFollowingConnection")
        .delete()
        .where({ follower_id: followerId })
        .andWhere({ followed_id: followedId });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
