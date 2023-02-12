import { Request, Response } from "express";
import { GetAllUserService } from "./GetAllUsersService";

export class GetAllUserController {
  async handle(req: Request, res: Response) {
    const service = new GetAllUserService();

    const result = await service.execute();

    return res.status(201).json(result);
  }
}
