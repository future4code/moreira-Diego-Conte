import { Request, Response } from "express";
import createProducts from "../services/createProducts";

const postProducts = async (req: Request, res: Response) => {
  const { name, price, image_url } = req.body;
  try {
    if (!name || !price || !image_url) {
      throw new Error(`Please check inputs. Missing values.`);
    }
    if (name.length < 3) {
      throw new Error(
        `Please enter a valid name: at least 3 characters are required.`
      );
    }
    if (isNaN(Number(price))) {
      throw new Error(`Please check price: it must to a number.`);
    }

    await createProducts(name, price, image_url);

    res.status(201).send(`Product successfully registered.`);
  } catch (error: any) {
    switch (error.message) {
      case `Please check inputs. Missing values.`:
        res.status(422);
        break;
      case `Please enter a valid name: at least 3 characters are required.`:
        res.status(422);
        break;
      case `Please check price: it must to a number.`:
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};

export default postProducts;
