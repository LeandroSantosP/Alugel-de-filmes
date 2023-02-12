import { Router } from "express";
import { CreateUserController } from "../modules/users/services/CreateUser/CreateUserController";
import { GetAllUserController } from "../modules/users/services/GetAllUser/GetAllUseController";

const userRouter = Router();
const getAllUserController = new GetAllUserController();
const createUserController = new CreateUserController();

userRouter.post("/", createUserController.handle);
userRouter.get("/", getAllUserController.handle);

export { userRouter };
