import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../types/user";

const userBusiness = new UserBusiness();

export class UserController {
  signup = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password, role } = req.body;
      const token = await userBusiness.signup(name, email, password, role);

      res.status(201).send(token);
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

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await userBusiness.login(email, password);

      res.status(201).send(token);
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

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization as string;

      const user = await userBusiness.getAllUsers(token);

      res.status(200).send(user);
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

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const token: string = req.headers.authorization as string;
      const id: string = req.params.id as string;

      const user = await userBusiness.deleteUser(token, id);

      res.status(200).send(user);
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
}
