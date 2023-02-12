import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserSevice";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    const service = new CreateUserService();

    const result = await service.execute({
      email,
      name,
    });
    return res.status(201).json(result);
  }
}
