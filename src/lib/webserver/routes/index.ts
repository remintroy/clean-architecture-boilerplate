import ExpressApp, { Express } from "express";
import notFoundMiddleware from "../middlewares/notFound";
import errorHandlingMiddleware from "../middlewares/errorHandler";
import UserRouterV1 from "./user";

export default function expressRoutes(app: Express, express: typeof ExpressApp) {
  app.use(`${config.server.baseUrl == "/" ? "" : config.server.baseUrl}/api/v1`, UserRouterV1(express));
  app.use(notFoundMiddleware);
  app.use(errorHandlingMiddleware);
}
