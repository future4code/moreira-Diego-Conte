import express from "express";
import { BandController } from "../bands/BandController";

export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.get("/informations", bandController.getBandInfos);
bandRouter.post("/register", bandController.register);
