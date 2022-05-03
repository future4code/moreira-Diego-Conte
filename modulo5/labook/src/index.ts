import PostBusines from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import app from "./controller/app";
import { PostController } from "./controller/PostController";
import UserController from "./controller/UserController";
import PostData from "./data/PostData";
import UserData from "./data/UserData";

const userBusiness = new UserBusiness(new UserData());
const userController = new UserController(userBusiness);
const postBusiness = new PostBusines(new PostData());
const postController = new PostController(postBusiness);

app.post("/user/signup", userController.signup);
app.post("/user/login", userController.login);
app.post("/post/create", postController.createPost);
