import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import productRouter from "./routers/ProductRouter";
import globalRouter from "./routers/globalRouter";

import routes from "./routes";
import { localsMiddleware } from "./middlewares";
const app = express();

app.use(helmet());
/**
 * app setting
 */
app.set("view engine", "pug");
/*
 middle ware 
*/
app.use(logger("combined"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(localsMiddleware);

app.use(routes.globalHome, globalRouter);
app.use(routes.productHome, productRouter);

export default app;
