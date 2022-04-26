import { Request, Response } from "express";
import getProducts from "../services/getProducts";
import { Product } from "../data/types";

const getAllProducts = async (req: Request, res: Response) => {
  let order: string = req.query.order as string;
  let search: string = req.query.search as string;

  try {
    const response: Product[] = await getProducts(order, search);

    res.status(200).send({ Products: response });
  } catch (error: any) {
    switch (error.message) {
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};

export default getAllProducts;
