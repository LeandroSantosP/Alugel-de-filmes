import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUserService {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({
      include: {
        movie_rant: {
          select: {
            movie: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });

    return users;
  }
}
