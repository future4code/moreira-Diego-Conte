import express from "express";
import { ShowController } from "../shows/ShowController";

export const showRouter = express.Router();

const showController = new ShowController();

showRouter.get("/", showController.getScheduleByDay);
showRouter.post("/register", showController.register);
