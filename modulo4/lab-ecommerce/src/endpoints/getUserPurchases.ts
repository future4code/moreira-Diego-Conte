import { Request, Response } from "express";
import getPurchases from "../services/getPurchases";
import { listProducts } from "../data/types";

const getAllPurchases = async (req: Request, res: Response) => {
  const id = req.params.userId;

  try {
    if (!id) {
      throw new Error(`Please check ID: missing values.`);
    }

    const response: listProducts[] = await getPurchases(Number(id));

    res.status(200).send({ purchases: response });
  } catch (error: any) {
    switch (error.message) {
      case `Please check ID: missing values.`:
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};

export default getAllPurchases;
