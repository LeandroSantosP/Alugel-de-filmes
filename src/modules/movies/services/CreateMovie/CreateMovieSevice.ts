import { Movie } from "@prisma/client";
import { AppError } from "../../../../erros/appError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieService {
  async execute({
    title,
    duration,
    relased_date,
  }: CreateMovieDTO): Promise<Movie> {
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie already exists!");
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        relased_date,
      },
    });

    return movie;
  }
}
