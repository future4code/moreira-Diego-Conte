import app from "./controller/app";
import { UserController } from "./controller/userController";

const userController = new UserController();

app.get("/all", userController.getAllUsers);
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.delete("/:id", userController.deleteUser);
