import { Request, Response, Router } from "express";
import { TaskControler } from "../controller/TaskControler";



const router = Router()

router.get('/task/:id', async (req: Request, res: Response) => {
    return await TaskControler.getTasksById  (req, res)
})
router.put('/task', async (req: Request, res: Response) => {
    return await TaskControler.createTask (req, res)
})

export default router