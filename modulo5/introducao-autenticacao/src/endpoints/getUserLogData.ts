import { Request, Response } from "express";
import { getTokenData } from "../data/getTokenData";
import { getUserById } from "../data/getUserById";

export const getUserLogData = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
