import connection from "../connection";

const createProducts = async (
  name: string,
  price: number,
  image_url: string
): Promise<void> => {
    const id: number = (Date.now()) * (Math.floor(Math.random() * 100000));
  try {
    await connection("labecommerce_products").insert({
      id,
      name,
      price,
      image_url,
    });
  } catch (error: any) {
    return error.response?.data || error.message;
  }
};

export default createProducts;
