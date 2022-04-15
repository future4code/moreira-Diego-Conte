import connection from "../connection";
import { Product } from "../types";
import getProducts from "./getProducts";

const registerPurchases = async (
  userId: number,
  productId: number,
  quantity: number
): Promise<void> => {
  const id: number = Date.now() * Math.floor(Math.random() * 100000);
  const response: Product[] = await getProducts();

  const totalPrice = response
    .filter((i) => {
      return i.id === productId;
    })
    .map((p) => {
      return p.price * quantity;
    });

  await connection("labecommerce_purchases").insert({
    id,
    user_id: userId,
    product_id: productId,
    quantity,
    total_price: totalPrice,
  });
};

export default registerPurchases;
