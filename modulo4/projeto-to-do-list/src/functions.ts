import connection from "./connection";

// Creating new users
export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection
    .insert({
      name,
      nickname,
      email,
    })
    .into("TodoListUsers");
};

export const getUser = async (id: number): Promise<any> => {
  const result = await connection.raw(`
    SELECT id, nickname FROM TodoListUsers WHERE id = '${id}'
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
    creatorUserId,
  });
};

export const getTask = async (id: number): Promise<any> => {
  const result = await connection("TodoListTasks")
    .join("TodoListUsers", "TodoListTasks.creatorUserId", "TodoListUsers.id")
    .select(
      "TodoListTasks.id as taskId",
      "title",
      "description",
      "TodoListTasks.limitDate",
      "status",
      "creatorUserId",
      "TodoListUsers.nickname as creatorUserNickname"
    )
    .where("TodoListTasks.id", id);
  return result;
};

export const getAllUsers = async (): Promise<any> => {
  const result = await connection.raw(`
  SELECT id, nickname FROM TodoListUsers`);

  return result[0];
};

export const getTaskById = async (id: number): Promise<any> => {
  const result = await connection.raw(`
  SELECT 
  TodoListTasks.id AS taskId, 
  title, 
  description, 
  limitDate, 
  creatorUserId, 
  status,
  TodoListUsers.nickname
  FROM TodoListTasks
  INNER JOIN TodoListUsers
  ON TodoListTasks.creatorUserId = TodoListUsers.id
  WHERE TodoListTasks.creatorUserId = '${id}'
  `);

  return result[0];
};

export const searchUserByName = async (query: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT id, nickname
  FROM TodoListUsers 
  WHERE 
  name LIKE "%${query}%" OR
  nickname LIKE "%${query}%" OR 
  email LIKE "%${query}%"
  `);

  return result[0];
};

export const taskResponsible = async (
  taskId: number,
  responsibleUserId: number[]
): Promise<any> => {
  const dataToSubmit = responsibleUserId.map((t) => {
    return {
      taskId: taskId,
      responsibleUserId: t,
    };
  });

  await connection("TodoListResponsibleUserTaskRelation").insert(dataToSubmit);
};

export const userResponsibleForTask = async (id: number): Promise<any> => {
  const result = await connection.raw(`
  SELECT responsibleUserId, TodoListUsers.nickname
  FROM TodoListResponsibleUserTaskRelation
  INNER JOIN TodoListUsers
  ON TodoListResponsibleUserTaskRelation.responsibleUserId = TodoListUsers.id
  WHERE TodoListResponsibleUserTaskRelation.taskId = '${id}'
  `);

  return result[0];
};

export const updateStatusTask = async (
  id: number,
  status: string
): Promise<any> => {
  await connection.raw(`
  UPDATE TodoListTasks SET status = "${status}" WHERE id = "${id}"
  `);
};

export const getAllTasksByStatus = async (status: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT 
  TodoListTasks.id AS taskId, 
  title, 
  description, 
  limitDate, 
  creatorUserId, 
  TodoListUsers.nickname AS creatorUserNickname
  FROM TodoListTasks
  INNER JOIN TodoListUsers
  ON TodoListTasks.creatorUserId = TodoListUsers.id
  WHERE TodoListTasks.status = '${status}'
  `);

  return result[0];
};

export const getOverdueTasks = async (): Promise<any> => {
  const result = await connection.raw(`
  SELECT
  TodoListTasks.id AS taskId, 
  title, 
  description, 
  limitDate, 
  status,
  creatorUserId, 
  TodoListUsers.nickname AS creatorUserNickname
  FROM TodoListTasks
  INNER JOIN TodoListUsers
  ON TodoListUsers.id = TodoListTasks.creatorUserId 
  WHERE TodoListTasks.limitDate < CURDATE()
  AND TodoListTasks.status <> "done"
  `);

  return result[0];
};

export const deleteAssignedUserFromTask = async (
  taskId: number,
  userId: number
): Promise<any> => {
  const result = await connection.raw(`
  DELETE FROM TodoListResponsibleUserTaskRelation 
  WHERE taskId = '${taskId}' 
  AND responsibleUserId = '${userId}'
  `);

  return result[0];
};

export const searchTaskByTerms = async (query: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT *
  FROM TodoListTasks 
  WHERE 
  title LIKE "%${query}%" OR
  description LIKE "%${query}%"
  `);

  return result[0];
};

//How to create an ID >>> id: Date.now() + Math.random()
//However, I prefered to use SQL auto_increment
