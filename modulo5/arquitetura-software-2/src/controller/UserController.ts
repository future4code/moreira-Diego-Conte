import { Request, Response } from "express";
import { signupBusiness } from "../business/user/signupBusiness";
import { signupInputDTO } from "../model/user";

export class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password, role } = req.body;
      const input: signupInputDTO = {
        name,
        nickname,
        email,
        password,
        role,
      };

      const token: string = await signupBusiness(input);

      res.status(201).send({
        message: "Usuário criado!",
        token,
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const token: string = await loginBusiness(email, password);

      res.send({
        message: "Usuário logado!",
        token,
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
