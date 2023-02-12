import { Request, Response } from "express";
import { CreateMovieService } from "./CreateMovieSevice";

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { title, duration, relased_date } = req.body;

    const service = new CreateMovieService();

    const result = await service.execute({
      duration,
      relased_date,
      title,
    });
    return res.status(201).json(result);
  }
}
