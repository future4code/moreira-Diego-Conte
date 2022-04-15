import connection from "../connection";
import { Product } from "../types";

const getProducts = async (): Promise<Product[]> => {
  try {
    const result: Product[] = await connection(
      "labecommerce_products"
    ).select();

    const response: Product[] = result.map((p) => {
      return {
        id: p.id,
        name: p.name,
        price: p.price,
        image_url: p.image_url,
      };
    });

    return response;

  } catch (error: any) {
    return error.response?.data || error.message;
  }
};

export default getProducts;
