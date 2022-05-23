import { UserDatabase } from "../../data/user/UserDatabase";
import { CustomError } from "../../errors/CustomErrors";
import { LoginInputDTO, User, UserInputDTO, USER_ROLE } from "../../model/User";
import HashGenerator from "../services/HashGenerator";
import IdGenerator from "../services/IdGenerator";
import TokenGenerator from "../services/TokenGenerator";
import ValidateEmail from "../services/ValidateEmail";

export class UserBusiness {
  constructor(private userDatabase: UserDatabase) {}

  public async signup(input: UserInputDTO) {
    const { name, email, password, role } = input;
    try {
      if (!name) {
        throw new CustomError(
          422,
          "Missing inputs: please, enter a user name."
        );
      }

      if (name.length < 2 || !name.includes(" ")) {
        throw new CustomError(
          422,
          "Check your name: please, enter name and surname."
        );
      }

      const checkingFormatEmail: boolean = ValidateEmail.emailChecker(email);

      if (!checkingFormatEmail) {
        throw new CustomError(
          422,
          "Invalid email: please, check the email informed and try again."
        );
      }

      const isEmailRegistered: User | undefined =
        await this.userDatabase.getUserByEmail(email);

      if (isEmailRegistered) {
        throw new CustomError(
          409,
          "This e-mail is already registered. Switch to 'login area' and enter your password."
        );
      }

      if (password.length < 6) {
        throw new CustomError(
          422,
          "Invalid password: at least 6 characteres are required."
        );
      }

      if (!role) {
        throw new CustomError(422, "Missing inputs: please, enter a user role");
      }

      if (
        role.toUpperCase() !== USER_ROLE.ADMIN &&
        role.toUpperCase() !== USER_ROLE.NORMAL
      ) {
        throw new CustomError(
          422,
          "Invalid role: only 'admin' or 'normal' role is allowed."
        );
      }

      const id = IdGenerator.generate();
      const cypherPassword = await HashGenerator.hash(password);

      const user: User = new User(
        id,
        name,
        email,
        cypherPassword,
        User.stringToUserRole(role.toUpperCase())
      );

      await this.userDatabase.createUser(user);

      const accessToken = TokenGenerator.generate({
        id,
        role,
      });

      return {
        message: "User successfully created.",
        access_token: accessToken,
      };
    } catch (error) {
      if (error instanceof CustomError) {
        if (error.message.includes("key 'email'")) {
          throw new CustomError(409, "Email already in use");
        }
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }

  public async login(input: LoginInputDTO) {
    const { email, password } = input;
    try {
      if (!email) {
        throw new CustomError(
          422,
          "Invalid email: please, enter an e-mail address."
        );
      }
      const checkingFormatEmail: boolean = ValidateEmail.emailChecker(email);

      if (!checkingFormatEmail) {
        throw new CustomError(
          422,
          "Invalid email: please, check the email informed and try again."
        );
      }

      const user: User | undefined = await this.userDatabase.getUserByEmail(
        email
      );

      if (!user) {
        throw new CustomError(
          404,
          "This e-mail is not registered. Switch to 'signup area' to create a new user."
        );
      }

      if (!password) {
        throw new CustomError(422, "Invalid password.");
      }

      if (password.length < 6) {
        throw new CustomError(
          422,
          "Invalid password: at least 6 characteres are required."
        );
      }

      const isPasswordCorrect = HashGenerator.compareHash(
        password,
        user.getPassword()
      );

      if (!isPasswordCorrect) {
        throw new CustomError(
          401,
          "Invalid credentials: please, check your password."
        );
      }

      const accessToken = TokenGenerator.generate({
        id: user.getId(),
        role: user.getRole(),
      });

      return {
        message: `Welcome, ${user.getName()}.`,
        access_token: accessToken,
      };
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }
}
