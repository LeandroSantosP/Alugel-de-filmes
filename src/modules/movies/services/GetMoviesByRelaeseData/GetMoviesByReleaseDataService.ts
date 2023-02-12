import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMoviesByReleaseDataService {
  async execute(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      orderBy: {
        relased_date: "desc",
      },
      include: {
        movie_rant: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return movies;
  }
}
