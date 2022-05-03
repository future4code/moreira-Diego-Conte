import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import LoginInputDTO from "../types/loginInputTDO";
import SignupInputDTO from "../types/signupInputTDO";

export default class UserBusiness {
  constructor(private userData: UserData) {}

  signup = async (input: SignupInputDTO) => {
    const { name, email, password } = input;

    if (!email || email.indexOf("@") === -1) {
      throw new Error("Please, check your e-mail address.");
    }

    if (!password || password.length < 6) {
      throw new Error(
        "Invalid password. At least six characters are required."
      );
    }

    if (!name) {
      throw new Error("Please, enter user name.");
    }

    const checkIfEmailRegistered = await this.userData.findByEmail(email);
    if (checkIfEmailRegistered) {
      throw new Error("Email already registered.");
    }

    const id = IdGenerator.generate();
    const hashedPassword = await HashManager.createHash(password);

    const user = new User(id, name, email, hashedPassword);
    await this.userData.insert(user);
    const token = Authenticator.generate({ id });

    return token;
  };

  login = async (input: LoginInputDTO) => {
    const { email, password } = input;

    if (!email || email.indexOf("@") === -1) {
      throw new Error("Please, check your e-mail address.");
    }

    if (!password || password.length < 6) {
      throw new Error(
        "Invalid password. At least six characters are required."
      );
    }

    const userData = await this.userData.findByEmail(email);
    if (!userData) {
      throw new Error("Email not registered.");
    }

    const token: string = Authenticator.generate({id: userData.id});

    return {name: userData.name, token: token};
  };
}
