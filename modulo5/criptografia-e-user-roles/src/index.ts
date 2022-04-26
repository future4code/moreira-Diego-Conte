import app from "./app";
import { createUser } from "./endpoints/createUser";
import { getUserLogData } from "./endpoints/getUserLogData";
import { login } from "./endpoints/login";

app.get("/user/profile", getUserLogData);
app.post("/user/signup", createUser);
app.post("/user/login", login);
