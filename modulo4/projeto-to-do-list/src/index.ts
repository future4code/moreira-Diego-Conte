import { Request, Response } from "express";
import app from "./app";
import { createTask, createUser, editUser, getTask, getUser } from "./functions";

app.get("/user", async (req: Request, res: Response) => {
  const id: number = Number(req.query.id);

  try {
    if (!id) {
      throw new Error("Please check request: missing id.");
    }
    if (typeof id !== typeof 0) {
      throw new Error("Please check ID. It must to be a number.");
    }

    let result = await getUser(id);

    if (result.length <= 0) {
      result = "No user found.";
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
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});

//
//
app.get("/task", async (req: Request, res: Response) => {
  const id: number = Number(req.query.id);

  try {
    if (!id) {
      throw new Error("Please check request: missing id.");
    }
    if (typeof id !== typeof 0) {
      throw new Error("Please check ID. It must to be a number.");
    }

    let data = await getTask(id);
    let result;

    if (data.length <= 0) {
      result = "No task found.";
    }
      
    const date = data[0].limitDate;
    const newDate = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    result = { ...data[0], limitDate: newDate }

    res.status(200).send(result);
  } catch (error: any) {
    switch (error.message) {
      case "Please check request: missing id.":
        res.status(400);
        break;
      case `"Please check ID. It must to be a number."`:
        res.status(400);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
});

//
//

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

//
//
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

//
//

app.put("/user/edit", async (req: Request, res: Response) => {
  const id: number = Number(req.query.id);
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
