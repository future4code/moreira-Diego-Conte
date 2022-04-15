import { Request, Response } from "express";
import createUsers from "../services/createUsers";

const postUsers = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new Error(`Please check inputs. Missing values.`);
    }
    if(name.length < 3){
        throw new Error(`Please enter a valid name: at least 3 characters are required.`)
    }
    if (email.includes("@") === false) {
      throw new Error(`Please enter a valid email.`);
    }
    if (password.length < 6) {
      throw new Error(
        `Please enter a valid password: at least 6 characters are required.`
      );
    }

    await createUsers(name, email, password)

    res.status(201).send(`User successfully created.`)
  } catch (error: any) {
    switch (error.message) {
      case `Please check inputs. Missing values.`:
        res.status(422);
        break;
      case `Please enter a valid name: at least 3 characters are required.`:
        res.status(422);
        break;
      case `Please enter a valid email.`:
        res.status(422);
        break;
      case `Please enter a valid password: at least 6 characters are required.`:
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};

export default postUsers;
