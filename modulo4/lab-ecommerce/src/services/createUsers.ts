import connection from "../connection";

const createUsers = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const id: number = Date.now() + Math.random();
    await connection("labecommerce_users").insert({
      id,
      name,
      email,
      password,
    });
  } catch (error) {
    console.error("An unexpected error occurred: ", error);
  }
};

export default createUsers;
