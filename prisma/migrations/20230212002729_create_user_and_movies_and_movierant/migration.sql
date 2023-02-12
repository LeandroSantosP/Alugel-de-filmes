-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "relased_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie_rant" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "movie_rant_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");

-- AddForeignKey
ALTER TABLE "movie_rant" ADD CONSTRAINT "movie_rant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_rant" ADD CONSTRAINT "movie_rant_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
