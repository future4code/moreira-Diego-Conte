import app from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { createUser } from "./endpoints/createUser";
import { getUserById } from "./endpoints/getUserById";
import { getUserProfile } from "./endpoints/getUserProfile";
import { login } from "./endpoints/login";

app.get("/user/:id", getUserById)
app.get("/user/profile", getUserProfile);
app.post("/user/signup", createUser);
app.post("/user/login", login);
app.post("/recipe", createRecipe)