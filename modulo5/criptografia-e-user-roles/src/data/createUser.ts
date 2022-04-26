import connection from "../connection";
import { usersRole } from "../types";

export const createUsers = async (
  id: string,
  email: string,
  password: string,
  role: usersRole
): Promise<void> => {
  try {
    await connection("User").insert({
      id,
      email,
      password,
      role,
    });
  } catch (error: any) {
    return error.response?.data || error.message;
  }
};
