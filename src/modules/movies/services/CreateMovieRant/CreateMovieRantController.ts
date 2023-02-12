import { Request, Response } from "express";
import { CreateMovieRantService } from "./CreateMovieRantService";

export class CreateMovieRantController {
  async handle(req: Request, res: Response) {
    const { movieId, userId } = req.body;

    const createMovieRantService = new CreateMovieRantService();

    await createMovieRantService.execute({ movieId, userId });

    return res.status(201).send();
  }
}
