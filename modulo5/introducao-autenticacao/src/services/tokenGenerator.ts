import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../src/types";
import dotenv from "dotenv";

export const tokenGenerator = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },

    process.env.JWT_KEY as string,

    {
      expiresIn: "24h",
    }
  );
  return token;
};
