import connection from "../connection";
import { listProducts } from "../data/types";

const getPurchases = async (id: number): Promise<listProducts[]> => {
  const response: listProducts[] = await connection("labecommerce_purchases")
    .select(
      "labecommerce_users.name AS userName",
      "labecommerce_products.name AS productName",
      "price",
      "labecommerce_purchases.quantity",
      "labecommerce_purchases.total_price AS totalPrice"
    )
    .innerJoin(
      "labecommerce_users",
      "labecommerce_purchases.user_id",
      "labecommerce_users.id"
    )
    .innerJoin(
      "labecommerce_products",
      "labecommerce_purchases.product_id",
      "labecommerce_products.id"
    )
    .where("user_id", id);

  const result: listProducts[] = response.map((p) => {
    return {
      userName: p.userName,
      productName: p.productName,
      price: p.price,
      quantity: p.quantity,
      totalPrice: p.totalPrice,
    };
  });

  return result;
};

export default getPurchases;
