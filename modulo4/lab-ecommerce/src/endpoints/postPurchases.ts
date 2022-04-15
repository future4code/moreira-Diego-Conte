import { Request, Response } from "express";
import registerPurchases from "../services/registerPurchases";

const purchases = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;
  try {
    if (!userId || !productId || !quantity) {
      throw new Error(`Please check inputs. Missing values.`);
    }
    if (
      isNaN(Number(userId)) ||
      isNaN(Number(productId)) ||
      isNaN(Number(quantity))
    ) {
      throw new Error(`Please check inputs: it must to a number.`);
    }
    await registerPurchases(userId, productId, quantity);
    res.status(201).send(`Purchase successfully registered.`)
  } catch (error: any) {
    switch (error.message) {
      case `Please check inputs. Missing values.`:
        res.status(422);
        break;
      case `Please check inputs: it must to a number.`:
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};

export default purchases;
