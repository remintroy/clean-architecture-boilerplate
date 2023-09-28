import ExpressApp, { Express } from "express";
import notFoundMiddleware from "../middlewares/notFound";
import path from "path";
import UserRouterV1 from "./user";

export default function expressRoutes(app: Express, express: typeof ExpressApp) {
  app.use(path.join(`${config.server.baseUrl}`, `/api/v1`), UserRouterV1(express));
  app.use(notFoundMiddleware);
}
