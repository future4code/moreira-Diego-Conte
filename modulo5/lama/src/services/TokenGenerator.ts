import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AuthenticationData from "../types/AuthenticationData";

dotenv.config();

class TokenGenerator {
  public static generate(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.EXPIRES_IN,
    });
    return token;
  }

  public static verify(token: string): AuthenticationData {
    const data = jwt.verify(token, process.env.JWT_KEY as string);

    return data as AuthenticationData;
  }
}

export default TokenGenerator;
