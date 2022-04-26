import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";


export const tokenGenerator = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },

    process.env.JWT_KEY as string,

    {
      expiresIn: process.env.EXPIRES_IN,
    }
  );
  return token;
};
