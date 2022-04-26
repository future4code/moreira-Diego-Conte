import connection from "../connection";
import { Product } from "../data/types";

const getProducts = async (
  order: string,
  search: string
): Promise<Product[]> => {
  try {
    let result: Product[] = [];

    if (order && search) {
      result = await connection("labecommerce_products")
        .where("name", "LIKE", `%${search}%`)
        .orderBy("name", order);
    }

    if (order && !search) {
      result = await connection("labecommerce_products").orderBy("name", order);
    }

    if (!order && search) {
      result = await connection("labecommerce_products").where(
        "name",
        "LIKE",
        `%${search}%`
      );
    }

    if (!order && !search) {
      result = await connection("labecommerce_products");
    }

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
