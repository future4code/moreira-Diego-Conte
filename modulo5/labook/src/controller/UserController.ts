import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import LoginInputDTO from "../types/loginInputTDO";
import SignupInputDTO from "../types/signupInputTDO";

export default class UserController {
  constructor(private userBusiness: UserBusiness) {}

  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const input: SignupInputDTO = {
      name,
      email,
      password,
    };
    try {
      const token = await this.userBusiness.signup(input);

      res.status(201).send({ message: "User successfully registered.", token_access: token });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Something went wrong!");
    }
  };

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const input: LoginInputDTO = {
      email,
      password,
    };
    try {
      const response = await this.userBusiness.login(input);

      res
        .status(200)
        .send({
          message: `Hi, ${response.name}, you have successfully logged in.`,
          token: response.token,
        });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Something went wrong!");
    }
  };
}
