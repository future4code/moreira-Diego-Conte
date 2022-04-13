import app from "./app";
import { getUsersByPage } from "./endpoints/exercicio3";
import { getOrderedUsers } from "./endpoints/exercicio2";
import { getUsersByName, getUsersByType } from "./endpoints/exercicio1";
import { getAllUsersOrderedAndPaginated } from "./endpoints/exercicio4";

app.get('/users', getUsersByName)
app.get('/users/order', getOrderedUsers)
app.get('/users/page', getUsersByPage)
app.get('/users/:type', getUsersByType)
app.get('/user', getAllUsersOrderedAndPaginated)
