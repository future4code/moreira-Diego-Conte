import express from "express";
import userController from "../controller/UserController";

export const userRouter = express.Router();

userRouter.get("/profile/:id", userController.getUserById);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
