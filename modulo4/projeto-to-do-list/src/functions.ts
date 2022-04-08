import connection from "./connection";

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection
    .insert({
      //   id: Date.now() + Math.random(),
      name,
      nickname,
      email,
    })
    .into("TodoListUsers");
};

export const getUser = async (id: number): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM TodoListUsers WHERE id = '${id}'
    `);
  return result[0];
};

export const editUser = async (
  id: number,
  name: string,
  nickname: string
): Promise<void> => {
  await connection("TodoListUsers")
    .update({
      name,
      nickname,
    })
    .where("id", id);
};

export const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: number
): Promise<any> => {
  await connection("TodoListTasks").insert({
    title,
    description,
    limitDate,
    creatorUserId
  });
};

export const getTask = async (id: number): Promise<any> => {
  const result = await connection("TodoListTasks")
  .join('TodoListUsers', "TodoListTasks.creatorUserId", 'TodoListUsers.id')
  .select(
    "TodoListTasks.id as taskId",
    "title",
    "description",
    "TodoListTasks.limitDate",
    "status",
    "creatorUserId",
    "TodoListUsers.nickname as creatorUserNickname")
  .where('TodoListTasks.id', id)
  return result;
};
