import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import userDatabase from "../data/UserDatabase";
import hashGenerator from "../services/hashGenerator";
import idGenerator from "../services/idGenerator";
import tokenGenerator, { AuthenticationData } from "../services/tokenGenerator";

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

      const id = idGenerator.generate();

      const cypherPassword = await hashGenerator.hash(password);

      await userDatabase.createUser(
        new User(id, name, email, cypherPassword, stringToUserRole(role))
      );

      const accessToken = tokenGenerator.generate({
        id,
        role,
      });
      return { accessToken };
    } catch (error) {
      if (error.message.includes("key 'email'")) {
        throw new CustomError(409, "Email already in use");
      }

      throw new CustomError(error.statusCode, error.message);
    }
  }

  public async login(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new CustomError(422, "Missing input");
      }

      const user = await userDatabase.getUserByEmail(email);

      if (!user) {
        throw new CustomError(401, "Invalid credentials");
      }

      const isPasswordCorrect = await hashGenerator.compareHash(
        password,
        user.getPassword()
      );

      if (!isPasswordCorrect) {
        throw new CustomError(401, "Invalid credentials");
      }

      const accessToken = tokenGenerator.generate({
        id: user.getId(),
        role: user.getRole(),
      });

      return { accessToken };
    } catch (error) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

  public async getUserById(id: string, token: string) {
    try {
      if (!token) {
        throw new Error("Please enter a token.");
      }

      const tokenData: AuthenticationData = tokenGenerator.verify(token);
      if (!tokenData) {
        throw new Error("Please enter a valid token.");
      }

      if (!id) {
        throw new CustomError(422, "Please, enter an user ID");
      }

      const response = await userDatabase.getUserById(id);

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
      throw new CustomError(error.statusCode, error.message);
    }
  }
}

export default new UserBusiness();
