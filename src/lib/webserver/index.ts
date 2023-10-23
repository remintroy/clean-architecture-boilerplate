import express from "express";
import http from "http";
import expressConfig from "./express";

const app = express();
const server = http.createServer(app);

expressConfig(app, express);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function startWebServer() {
  server.listen(config.server.port, () => {
    console.log(`[${config.server.id}] ${config.server.name} is started on ${config.server.port}`);
  });
}
