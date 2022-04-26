import connection from "../connection";

const createUsers = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  const id: number = (Date.now()) * (Math.floor(Math.random() * 100000));
  await connection("labecommerce_users").insert({
    id,
    name,
    email,
    password,
  });
};

export default createUsers;
