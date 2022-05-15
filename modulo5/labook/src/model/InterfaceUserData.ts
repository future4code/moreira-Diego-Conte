import User from "./User";
import UserRelationships from "./UserFriendships";

interface IUserData {
  insert(user: User): Promise<void>;
  findUserByEmail(email: string): Promise<User>;
  findUserById(id: string): Promise<User>;
  createFriendship(ids: UserRelationships): Promise<void>;
  getFriendship(ids: UserRelationships): Promise<UserRelationships>;
  deleteFriendship(ids: UserRelationships): Promise<void>;
}

export default IUserData;
