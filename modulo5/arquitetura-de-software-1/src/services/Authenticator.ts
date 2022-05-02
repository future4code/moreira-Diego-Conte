import * as jwt from "jsonwebtoken";
import authenticationData from "../types/authenticationData";

export class Authenticator {
  public generate(input: authenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.EXPIRES_IN,
    });
    return token;
  }

  public getTokenData(token: string): authenticationData {
    const data = jwt.verify(token, process.env.JWT_KEY as string);

    return data as authenticationData;
  }
}
