import UserDatabase from "../data/UserDatabase";
import { CustomError } from "../errors/CustomErrors";
import { User } from "../model/User";
import HashGenerator from "../services/HashGenerator";
import IdGenerator from "../services/IdGenerator";
import TokenGenerator from "../services/TokenGenerator";
import AuthenticationData from "../types/AuthenticationData";

export class UserBusiness {
  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    try {
      if (!name || !email || !password || !role) {
        throw new CustomError(422, "Missing input");
      }

      if (email.indexOf("@") === -1) {
        throw new CustomError(422, "Invalid email");
      }

      if (password.length < 6) {
        throw new CustomError(422, "Invalid password");
      }

      const id = IdGenerator.generate();

      const cypherPassword = await HashGenerator.hash(password);

      await UserDatabase.createUser(
        new User(id, name, email, cypherPassword, stringToUserRole(role))
      );

      const accessToken = TokenGenerator.generate({
        id,
        role,
      });
      console.log(accessToken)
      return { accessToken };
    } catch (error) {
      if (error instanceof CustomError) {
        if (error.message.includes("key 'email'")) {
          throw new CustomError(409, "Email already in use");
        }

        throw new CustomError(error.statusCode, error.message);
      }
    }
  }

  public async login(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new CustomError(422, "Missing input");
      }

      const user = await UserDatabase.getUserByEmail(email);

      if (!user) {
        throw new CustomError(401, "Invalid credentials");
      }

      const isPasswordCorrect = await HashGenerator.compareHash(
        password,
        user.getPassword()
      );

      if (!isPasswordCorrect) {
        throw new CustomError(401, "Invalid credentials");
      }

      const accessToken = TokenGenerator.generate({
        id: user.getId(),
        role: user.getRole(),
      });

      return { accessToken };
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }

  public async getUserById(id: string, token: string) {
    try {
      if (!token) {
        throw new CustomError(422, "Please enter a token.");
      }

      const tokenData: AuthenticationData = TokenGenerator.verify(token);
      if (!tokenData) {
        throw new CustomError(401, "Please enter a valid token.");
      }

      if (!id) {
        throw new CustomError(422, "Please, enter an user ID");
      }

      const response = await UserDatabase.getUserById(id);

      if (response === undefined) {
        throw new CustomError(404, "User not found");
      }

      const user = {
        id: response.getId(),
        name: response.getName(),
        email: response.getEmail(),
        role: response.getRole(),
      };

      return user;
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }

  public async getAllUsers(token: string) {
    try {
      if (!token) {
        throw new CustomError(422, "Please enter a token.");
      }

      const tokenData: AuthenticationData = TokenGenerator.verify(token);
      if (!tokenData) {
        throw new CustomError(401, "Please enter a valid token.");
      }

      if (tokenData.role !== "ADMIN") {
        throw new CustomError(
          401,
          "Please, sign in with or switch to an administrator account to access this endpoint."
        );
      }

      const response = await UserDatabase.getAllUsers();

      if (response.length < 1) {
        throw new CustomError(404, "No users found");
      }

      const users = response.map((user) => {
        return {
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          role: user.getRole(),
        };
      });

      return users;
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }
}

export default new UserBusiness();
function stringToUserRole(role: string): any {
  throw new Error("Function not implemented.");
}
