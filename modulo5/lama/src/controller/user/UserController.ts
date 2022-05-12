import { Request, Response } from "express";
import { UserBusiness } from "../../business/user/UserBusiness";
import { UserDatabase } from "../../data/user/UserDatabase";
import { LoginInputDTO, UserInputDTO } from "../../model/User";

const userBusiness = new UserBusiness(new UserDatabase());

export class UserController {
  public async signup(req: Request, res: Response) {
    try {
      const { name, role, email, password } = req.body;

      const input: UserInputDTO = { name, role, email, password };
      const response = await userBusiness.signup(input);

      res.status(200).send(response);
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const input: LoginInputDTO = { email, password };

      const response = await userBusiness.login(input);

      res.status(200).send(response);
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }
}
