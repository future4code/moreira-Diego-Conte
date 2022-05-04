import User from "./User";

interface IUserData {
  insert(user: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export default IUserData;
