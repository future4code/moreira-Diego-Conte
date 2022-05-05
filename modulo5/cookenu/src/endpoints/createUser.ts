import { Request, Response } from "express";
import { HashManager } from "../services/HashManager";
import { idGenerator } from "../services/idGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/user";
import { Authenticator } from "../services/Authenticator";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

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

    const userDatabase = new UserDatabase();
    const isEmailRegistered = await userDatabase.getUserByEmail(email);

    if (isEmailRegistered) {
      res.statusCode = 409;
      throw new Error("Email already registered.");
    }

    const hashManager = new HashManager();
    const hashPassword: string = await hashManager.createHash(password);

    const generatingId = new idGenerator();
    const id = generatingId.generate();

    const user: User = new User(id, name, email, hashPassword, role);
    await userDatabase.createUser(user);
    
    const authenticator = new Authenticator();
    const token: string = authenticator.generate({ id, role });

    res.status(201).send({ access_token: token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res
        .status(500)
        .send({ message: error.sqlMessage || "Internal server error" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
