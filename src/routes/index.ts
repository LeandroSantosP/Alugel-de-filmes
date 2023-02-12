import { Router } from "express";
import { movieRoutes } from "./movie.routes";
import { userRouter } from "./user.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/movies", movieRoutes);

export { routes };
