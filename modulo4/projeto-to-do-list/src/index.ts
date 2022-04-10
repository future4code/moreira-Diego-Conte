import { Request, Response } from "express";
import app from "./app";
import {
  createTask,
  createUser,
  deleteAssignedUserFromTask,
  editUser,
  getAllTasksByStatus,
  getAllUsers,
  getOverdueTasks,
  getTask,
  getTaskById,
  getUser,
  searchTaskByTerms,
  searchUserByName,
  taskResponsible,
  updateStatusTask,
  userResponsibleForTask,
} from "./functions";
import { formatingDate } from "./helpers";

/**********************
 *   EXERCÍCIO 6      *
 * ********************/
app.get("/user/all", async (req: Request, res: Response) => {
  try {
    let result = await getAllUsers();

    if (result.length === 0) {
      result = [];
    }

    res.status(200).send({ users: result });
  } catch (error: any) {
    switch (error.message) {
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 2      *
 * ********************/
app.get("/user/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  try {
    if (!id) {
      throw new Error("Please check request: missing id.");
    }
    if (isNaN(id)) {
      throw new Error("Please check ID. It must to be a number.");
    }

    const result = await getUser(id);

    if (result.length <= 0) {
      throw new Error("No user found.");
    }

    res.status(200).send(result);
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing id.":
        res.status(400);
        break;
      case `"Please check ID. It must to be a number."`:
        res.status(400);
        break;
      case "No user found.":
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 13     *
 * ********************/
app.get("/task/all", async (req: Request, res: Response) => {
  const status = req.query.status as string;

  try {
    if (!status) {
      throw new Error("Please check request: missing status.");
    }

    let result = await getAllTasksByStatus(status);
    result.forEach((t: any) => {
      t.limitDate = formatingDate(t.limitDate);
    });

    res.status(200).send({ tasks: result });
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing status.":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 14     *
 * ********************/
app.get("/task/delayed", async (req: Request, res: Response) => {
  try {
    const result = await getOverdueTasks();

    if (result.length < 1) {
      throw new Error("No task found.");
    }

    result.forEach((t: any) => {
      t.limitDate = formatingDate(t.limitDate);
    });

    res.status(200).send({ tasks: result });
  } catch (error: any) {
    switch (error.message) {
      case "No task found.":
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 17     *
 * ********************/
app.get('/task/name', async(req: Request, res: Response) => {
  const query = req.query.query as string;
  try {
      if (!query) {
        throw new Error("Please check request: missing query.");
      }
  
      let result = await searchTaskByTerms(query);
  
      if (result.length === 0) {
        result = `No task found.`;
      }

      result.forEach((t: any) => {
        t.limitDate = formatingDate(t.limitDate);
      });
  
    res.status(200).send({tasks: result})
    
  } catch (error:any) {
    switch(error.message){
      case "Please check request: missing query.":
        res.status(422)
        break
      default:
        res.status(500)
    }
    res.send({message: error.sqlMessage || error.message})
  }
})

/************************
 *  EXERCÍCIOS 5 E 11   *
 * **********************/
app.get("/task/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  try {
    if (!id) {
      throw new Error(
        "Please check request: missing id (it must to be a number)."
      );
    }

    const task = await getTask(id);

    if (task.length === 0) {
      throw new Error("No task found.");
    }

    const user = await getUser(task[0].creatorUserId);
    const responsibleUsers = await userResponsibleForTask(id);

    const result = {
      taskId: task[0].taskId,
      title: task[0].title,
      description: task[0].description,
      limitDate: formatingDate(task[0].limitDate),
      status: task[0].status,
      creatorUserId: user[0].id,
      creatorUserNickname: user[0].nickname,
      responsibleUsers: Object.values(responsibleUsers),
    };

    res.status(200).send(result);
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing id (it must to be a number).":
        res.status(400);
        break;
      case "No task found.":
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 7      *
 * ********************/
app.get("/task", async (req: Request, res: Response) => {
  const id: number = Number(req.query.creatorUserId);

  try {
    if (!id) {
      throw new Error(
        "Please check request: missing id (it must to a number)."
      );
    }

    let result = await getTaskById(id);

    if (result.length === 0) {
      res.status(200).send({ tasks: [] });
    }

    result.forEach((t: any) => {
      t.limitDate = formatingDate(t.limitDate);
    });

    res.status(200).send({ tasks: result });
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing id (it must to a number).":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 8      *
 * ********************/
app.get("/user", async (req: Request, res: Response) => {
  const query = req.query.query as string;

  try {
    if (!query) {
      throw new Error("Please check request: missing query.");
    }

    let result = await searchUserByName(query);

    if (result.length === 0) {
      result = [];
    }

    res.status(200).send({ users: result });
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing query.":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 10     *
 * ********************/
app.get("/task/:id/responsible", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (!id) {
      throw new Error("Please check request: missing ID.");
    }
    let result = await userResponsibleForTask(id);

    if (result.length === 0) {
      throw new Error("No tasks found.");
    }

    res.status(200).send({ users: result });
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing ID.":
        res.status(422);
        break;
      case "No tasks found.":
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 1      *
 * ********************/
app.post("/user", async (req: Request, res: Response) => {
  const { name, nickname, email } = req.body;

  try {
    if (!name || !nickname || !email) {
      throw new Error("Please check inputs. Missing values.");
    }
    if (
      typeof name !== typeof "matrix" ||
      typeof nickname !== typeof "matrix" ||
      typeof email !== typeof "matrix"
    ) {
      throw new Error(`Please check inputs: it must to be string.`);
    }
    if (name.length < 2 || nickname.length < 2 || email.length < 6) {
      throw new Error(
        "Please check inputs. At least two characters are required in 'name' and 'nickname' and six in 'email'."
      );
    }

    await createUser(name, nickname, email);

    res.status(201).send(`User ${name} created successfully.`);
  } catch (error: any) {
    switch (error.message) {
      case "Please check inputs. Missing values.":
        res.status(422);
        break;
      case "Please check inputs: it must to be string.":
        res.status(422);
        break;
      case "Please check inputs. At least two characters are required in 'name' and 'nickname' and six in 'email'.":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 4      *
 * ********************/
app.post("/task", async (req: Request, res: Response) => {
  const { title, description, limitDate, creatorUserId } = req.body;

  try {
    if (!title || !description || !limitDate || !creatorUserId) {
      throw new Error("Please check inputs. Missing values.");
    }
    if (
      typeof title !== typeof "matrix" ||
      typeof description !== typeof "matrix" ||
      typeof limitDate !== typeof "matrix"
    ) {
      throw new Error("Please check inputs: it must to be string.");
    }

    const splitingDate = limitDate.split("/");
    const formatingDate = `${splitingDate[2]}-${splitingDate[1]}-${splitingDate[0]}`;

    await createTask(title, description, formatingDate, creatorUserId);

    res.status(201).send(`Task '${title}' successfully created.`);
  } catch (error: any) {
    switch (error.message) {
      case "Please check inputs. Missing values.":
        res.status(400);
        break;
      case "Please check inputs: it must to be string.":
        res.status(400);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/************************
 *  EXERCÍCIOS 9 E 16   *
 * **********************/
app.post("/task/responsible", async (req: Request, res: Response) => {
  const {taskId, responsibleUserId} = req.body;
  // const responsibleUserId = req.body.responsibleUserId;

  try {
    if (!taskId || !responsibleUserId || responsibleUserId.length === 0) {
      throw new Error("Please check inputs. Missing values.");
    }

    const isTask = await getTask(Number(taskId));
    if (isTask.length === 0) {
      throw new Error(`Task ${taskId} not found.`);
    }

    const isArray = Array.isArray(responsibleUserId);
    let result;

    if (isArray === false) {
      result = await taskResponsible(taskId, [responsibleUserId]);
    } else {
      result = await taskResponsible(taskId, responsibleUserId);
    }


    res.status(200).send(`Task ${taskId} successfully assigned.`);
  } catch (error: any) {
    switch (error.message) {
      case "Please check inputs. Missing values.":
        res.status(422);
        break;
      case `Task ${taskId} not found.`:
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 3      *
 * ********************/
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const { name, nickname } = req.body;

  try {
    if (!id) {
      throw new Error("Please check request: missing ID.");
    }
    if (typeof id !== typeof 0) {
      throw new Error("Please check ID. It must to be a number.");
    }
    if (!name || !nickname) {
      throw new Error(
        "Please check inputs. Missing values at 'name' and 'nickname'."
      );
    }
    if (
      typeof name !== typeof "matrix" ||
      typeof nickname !== typeof "matrix"
    ) {
      throw new Error("Please check inputs: it must to be string.");
    }
    if (name.length < 2 || nickname.length < 2) {
      throw new Error(
        "Please check inputs. At least two characters are required in 'name' and 'nickname'"
      );
    }

    await editUser(id, name, nickname);

    res.status(200).send(`User ${name} updated successfully.`);
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing ID.":
        res.status(400);
        break;
      case `"Please check ID. It must to be a number."`:
        res.status(400);
        break;
      case "Please check inputs. Missing values at 'name' and 'nickname'.":
        res.status(400);
        break;
      case "Please check inputs: it must to be string.":
        res.status(400);
        break;
      case "Please check inputs. At least two characters are required in 'name' and 'nickname'":
        res.status(400);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 12     *
 * ********************/
app.put("/task/status/:id/", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const status = req.body.status;

  try {
    if (!id || isNaN(id)) {
      throw new Error(
        "Please check request: missing ID (it must to be a number)."
      );
    }
    if (!status) {
      throw new Error("Please check request: missing status.");
    }
    if (status !== "to_do" && status !== "doing" && status !== "done") {
      throw new Error(
        "Please check status informed. Formats allowed: 'to_do', 'doing' or 'done'."
      );
    }

    await updateStatusTask(id, status);

    res.status(200).send(`Task ${id} successfully updated.`);
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing ID (it must to be a number).":
        res.status(422);
        break;
      case "Please check request: missing status.":
        res.status(422);
        break;
      case "Please check status informed. Formats allowed: 'to_do', 'doing' or 'done'.":
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});


/**********************
 *   EXERCÍCIO 15     *
 * ********************/
app.delete(
  "/task/:taskId/responsible/:responsibleUserId",
  async (req: Request, res: Response) => {
    const taskId = Number(req.params.taskId);
    const userId = Number(req.params.responsibleUserId);

    try {
      if (!taskId || isNaN(taskId)) {
        throw new Error(
          "Please check request: missing taskId (it must to be a number)."
        );
      }
      if (!userId || isNaN(userId)) {
        throw new Error(
          "Please check request: missing userId (it must to be a number)."
        );
      }

      const isTask = await getTask(taskId);
      const isUser = await getUser(userId);
      if (isTask.length < 1) {
        throw new Error(`Task ${taskId} not found.`);
      }
      if (isUser.length < 1) {
        throw new Error(`User ${userId} not found.`);
      }

      const result = await deleteAssignedUserFromTask(taskId, userId);
      if (result.affectedRows == 0) {
        throw new Error(
          `The task has not been unlinked. Check IDs and try again.`
        );
      }

      res
        .status(200)
        .send(`User ${userId} is no longer responsible for task ${taskId}.`);
    } catch (error: any) {
      switch (error.message) {
        case "Please check request: missing taskId (it must to be a number).":
          res.status(422);
          break;
        case "Please check request: missing userId (it must to be a number).":
          res.status(422);
          break;
        case `Task ${taskId} not found.`:
          res.status(422);
          break;
        case `User ${userId} not found.`:
          res.status(422);
          break;
        case `The task has not been unlinked. Check IDs and try again.`:
          res.status(404);
          break;
        default:
          res.status(500);
      }
      res.send({ message: error.sqlMessage || error.message });
    }
  }
);
