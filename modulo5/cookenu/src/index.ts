import app from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { createUser } from "./endpoints/createUser";
import { followUser } from "./endpoints/followUser";
import { getRecipesById } from "./endpoints/getRecipesById";
import { getUserById } from "./endpoints/getUserById";
import { getUserFeed } from "./endpoints/getUserFeed";
import { getUserProfile } from "./endpoints/getUserProfile";
import { login } from "./endpoints/login";
import { populate } from "./endpoints/populate";
import { unfollowUser } from "./endpoints/unfollowUsers";

app.get("/user/profile", getUserProfile);
app.get("/user/feed", getUserFeed);
app.get("/user/:id", getUserById);
app.get("/recipe/:id", getRecipesById);
app.post("/populate", populate);
app.post("/user/signup", createUser);
app.post("/user/login", login);
app.post("/recipe", createRecipe);
app.post("/user/follow", followUser);
app.post("/user/unfollow", unfollowUser);
