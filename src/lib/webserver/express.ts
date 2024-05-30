import expressImport, { Express } from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

export default function expressConfig(app: Express, express: typeof expressImport) {
  app.use(helmet());
  app.use(logger(config.server.isDevEnv ? "dev" : "combined"));
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }));
  app.use(cookieParser());
  app.use(cors(config.cors));
}
