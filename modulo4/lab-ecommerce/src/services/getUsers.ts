import connection from "../connection";
import { User } from "../data/types";

const getUsers = async (): Promise<User[]> => {
  try {
    const result: User[] = await connection("labecommerce_users");

    const response: User[] = result.map((u) => {
      return {
        id: u.id,
        name: u.name,
      };
    });

    return response;
  } catch (error: any) {
    return error.response?.data || error.message;
  }
};

export default getUsers;
