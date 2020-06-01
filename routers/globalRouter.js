import express from "express";
import routes from "../routes";

import { join, login, logout, home } from "../controller/homeController";
const globalRouter = express.Router();

globalRouter.get(routes.globalHome, home);
globalRouter.get(routes.globalJoin, join);
globalRouter.get(routes.globalLogin, login);
globalRouter.get(routes.globalLogout, logout);

export default globalRouter;
