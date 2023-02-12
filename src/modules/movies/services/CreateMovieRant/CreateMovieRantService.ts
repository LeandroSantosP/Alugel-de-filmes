import { PrismaClientUnknownRequestError } from "@prisma/client/runtime";
import { appendFile } from "fs";
import { AppError } from "../../../../erros/appError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRantDTO } from "../../dtos/CreateMovieRantDTO";

export class CreateMovieRantService {
  async execute({ movieId, userId }: CreateMovieRantDTO): Promise<void> {
    // verificar se o filme existe
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieExists) {
      throw new AppError("Movie does not exists!");
    }

    // verificar se o filme nao esta alugado

    const MovieAlreadyRented = await prisma.movieRant.findFirst({
      where: {
        movieId,
      },
    });

    if (MovieAlreadyRented) {
      throw new AppError("Movie already Rented!");
    }

    // verificar se o usuatio existe

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not Exists!");
    }

    //criar a locacao

    await prisma.movieRant.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
