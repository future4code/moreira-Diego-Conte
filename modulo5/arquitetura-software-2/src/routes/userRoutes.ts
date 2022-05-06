import { Request, Response, Router } from "express";
import { UserController } from "../controller/UserController";



const router = Router()

router.post('/user/signup', async (req: Request, res: Response) => {
    return await UserController.  (req, res)
})
router.post('/user/login', async (req: Request, res: Response) => {
    return await UserController. (req, res)
})

export default router;