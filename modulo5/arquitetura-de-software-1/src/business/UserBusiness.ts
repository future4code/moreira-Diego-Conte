import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { User, USER_ROLES } from "../types/user";

const userDatabase = new UserDatabase();
const hashManager = new HashManager();
const generatingId = new IdGenerator();
const authenticator = new Authenticator();

export class UserBusiness {
  signup = async (
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
  ) => {
    try {
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

      if (role.toUpperCase() !== "ADMIN" && role.toUpperCase() !== "NORMAL") {
        throw new Error(
          "Please, enter user role. It must be 'ADMIN' or 'NORMAL'."
        );
      }

      const isEmailRegistered = await userDatabase.getUserByEmail(email);

      if (isEmailRegistered) {
        throw new Error("Email already registered.");
      }

      const hashPassword: string = await hashManager.createHash(password);
      const id: string = generatingId.generate();

      const user: User = new User(id, name, email, hashPassword, role);
      await userDatabase.createUser(user);

      const token: string = authenticator.generate({ id, role });

      return token;
    } catch (error: any) {
      return { message: error.sqlMessage || error.message };
    }
  };

  login = async (email: string, password: string) => {
    try {
      if (!email || email.indexOf("@") === -1) {
        throw new Error("Please, check your e-mail address.");
      }

      if (!password || password.length < 6) {
        throw new Error(
          "Invalid password. At least six characters are required."
        );
      }

      const userData = await userDatabase.getUserByEmail(email);
      if (!userData) {
        throw new Error("User not registered. Please, enter a valid e-mail.");
      }

      const isPasswordCorrect: boolean = await hashManager.compareHash(
        password,
        userData.getPassword()
      );

      if (!isPasswordCorrect) {
        throw new Error("Password incorrect.");
      }

      const token: string = authenticator.generate({
        id: userData.getId(),
        role: userData.getRole(),
      });

      return token;
    } catch (error: any) {
      return { message: error.sqlMessage || error.message };
    }
  };

  getAllUsers = async (token: string) => {
    try {
      if (!token) {
        throw new Error("Please enter a token.");
      }

      const tokenData = authenticator.getTokenData(token);

      if (!tokenData) {
        throw new Error("Please enter a valid token.");
      }

      const userData = await userDatabase.getAllUsers();

      if (!userData) {
        throw new Error("No user found.");
      }

      return userData;
    } catch (error: any) {
      return { message: error.sqlMessage || error.message };
    }
  };

  deleteUser = async (token: string, id: string) => {
    try {
      if (!token) {
        throw new Error("Please enter a token.");
      }

      const tokenData = authenticator.getTokenData(token);

      if (!tokenData) {
        throw new Error("Please enter a valid token.");
      }

      const userData: User = await userDatabase.getUserById(id);

      if (!userData) {
        throw new Error("No user found.");
      }

      await userDatabase.deleteUserById(id);

      return `User ${id} successfully deleted.`;
    } catch (error: any) {
      return { message: error.sqlMessage || error.message };
    }
  };
}
