import { Request, Response } from "express";
import { GetMoviesByReleaseDataService } from "./GetMoviesByReleaseDataService";

export class GetMoviesByReleaseDataController {
  async handle(req: Request, res: Response) {
    const service = new GetMoviesByReleaseDataService();

    const result = await service.execute();

    return res.status(201).json(result);
  }
}
