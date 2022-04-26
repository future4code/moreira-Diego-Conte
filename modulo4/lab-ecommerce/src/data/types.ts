export type User = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export type Purchases = {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  totalPrice: number;
};

export type listProducts = {
  userName: string;
  productName: string;
  price: number;
  quantity: number;
  totalPrice: number;
};
