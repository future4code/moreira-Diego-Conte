import { Request, Response } from "express";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

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

    const userDatabase = new UserDatabase();
    const userData = await userDatabase.getUserByEmail(email);

    if (!userData) {
      res.statusCode = 409;
      throw new Error("Email not registered.");
    }

    const hashManager = new HashManager();
    const isPasswordCorrect = hashManager.compareHash(
      userData.getPassword(),
      password
    );

    if (!isPasswordCorrect) {
      res.statusCode = 401;
      throw new Error("E-mail or password incorrect.");
    }

    const authenticator = new Authenticator();
    const token: string = authenticator.generate({
      id: userData.getId(),
      role: userData.getRole(),
    });

    res.status(200).send({ access_token: token });
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
