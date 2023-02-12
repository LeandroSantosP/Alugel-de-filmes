import { Router } from "express";
import { CreateMovieController } from "../modules/movies/services/CreateMovie/CreateMoviesController";
import { CreateMovieRantController } from "../modules/movies/services/CreateMovieRant/CreateMovieRantController";
import { GetMoviesByReleaseDataController } from "../modules/movies/services/GetMoviesByRelaeseData/GetMoviesByReleaseDataController";

const movieRoutes = Router();

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRantController();
const getMoviesByReleaseData = new GetMoviesByReleaseDataController();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);
movieRoutes.get("/release", getMoviesByReleaseData.handle);

export { movieRoutes };
