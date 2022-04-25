import connection from "../connection";

export const createUsers = async (
  id: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    await connection("User").insert({
      id,
      email,
      password,
    });
  } catch (error: any) {
    return error.response?.data || error.message;
  }
};
