import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { tokenGenerator } from "../services/tokenGenerator";

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

    const user = await getUserByEmail(email);

    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    const token = tokenGenerator({
      id: user.id,
    });

    res.status(200).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({  message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
