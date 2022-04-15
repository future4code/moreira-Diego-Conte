import connection from "../connection";
import { User } from "../types";

const getUsers = async (): Promise<User[]> => {
  try {
    const result: User[] = await connection("labecommerce_users");
    return result;
  } catch (error: any) {
    return error.response?.data || error.message;
  }
};

export default getUsers;
