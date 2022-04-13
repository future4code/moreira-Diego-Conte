import { Request, Response } from "express";
import app from "../app";
import { searchUserByName, searchUserbyType } from "../data/functions";

/*
 * *********************
 *     EXERCÍCIO A     *
 * *********************
 */
export const getUsersByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name as string;
    if (!name) {
      throw new Error("Please enter a name.");
    }
    const result = await searchUserByName(name);
    res.status(200).send(result);
  } catch (error: any) {
    switch (error.message) {
      case "Please enter a name.":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};

/*
 * *********************
 *     EXERCÍCIO B     *
 * *********************
 */
export const getUsersByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const type = req.params.type as string;
    if (!type) {
      throw new Error(
        "Please enter a allowed type: 'teacher', 'operations' or 'CX'."
      );
    }
    const result = await searchUserbyType(type);
    res.status(200).send(result);
  } catch (error: any) {
    switch (error.message) {
      case "Please enter a allowed type: 'teacher', 'operations' or 'CX'.":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};
