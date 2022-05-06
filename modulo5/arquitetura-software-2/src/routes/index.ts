import { Router } from "express";
import userRoutes from "./userRoutes";
import tasksRoutes from "./tasksRoutes";

const router = Router();

router.use("/", userRoutes);
router.use("/", tasksRoutes);

export default router;
