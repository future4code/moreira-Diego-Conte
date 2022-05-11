import express from "express";
import UserController from "../controller/UserController";

export const userRouter = express.Router();

userRouter.get("/profile/:id", UserController.getUserById);
userRouter.get("/all", UserController.getAllUsers);
userRouter.post("/signup", UserController.signup);
userRouter.post("/login", UserController.login);
