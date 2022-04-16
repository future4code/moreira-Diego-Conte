import app from "./app";
import getAllProducts from "./endpoints/getAllProducts";
import getAllPurchases from "./endpoints/getUserPurchases";
import getAllUsers from "./endpoints/getAllUsers";
import postProducts from "./endpoints/postProducts";
import purchases from "./endpoints/postPurchases";
import postUsers from "./endpoints/postUsers";

app.get("/users", getAllUsers);
app.get("/products", getAllProducts);
app.get("/users/:userId/purchases", getAllPurchases);
app.post("/users", postUsers);
app.post("/products", postProducts);
app.post("/purchases", purchases);
