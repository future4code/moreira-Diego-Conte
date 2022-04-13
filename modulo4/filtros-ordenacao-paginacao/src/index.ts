import app from "./app";
import { getUsersByPage } from "./endpoints/exercicio3";
import { getOrderedUsers } from "./endpoints/exercicio2";
import { getUsersByName, getUsersByType } from "./endpoints/exercicio1";

app.get('/user', getUsersByName)
app.get('/user/order', getOrderedUsers)
app.get('/user/page', getUsersByPage)
app.get('/user/:type', getUsersByType)
app.get(/)