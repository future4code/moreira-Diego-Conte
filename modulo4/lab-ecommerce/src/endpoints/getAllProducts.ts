import { Request, Response } from "express";
import getProducts from "../services/getProducts";
import { Product } from "../types";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const response: Product[] = await getProducts();
    res.status(200).send({Products: response});
  } catch (error: any) {
    switch (error.message) {
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};

export default getAllProducts;
