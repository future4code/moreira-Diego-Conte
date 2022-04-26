import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { tokenGenerator } from "../services/tokenGenerator";
import { createUsers } from "../data/createUser";
import { HashManager } from "../services/HashManager";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;

    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 422;
      throw new Error("Please, check your e-mail address.");
    }

    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error(
        "Invalid password. At least six characters are required."
      );
    }

    if (!role) {
      res.statusCode = 422;
      throw new Error("Please, inform user role.");
    }

    const cypherPassword: string = new HashManager().createHash(password);

    const id = generateId();

    await createUsers(id, email, cypherPassword, role);

    const token = tokenGenerator({
      id,
      role,
    });

    res.status(200).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
