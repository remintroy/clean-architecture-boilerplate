import "./globals";
import express from "express";
import http from "http";
import connectToDb from "./lib/database/connection";
import serverConfig from "./lib/webserver";
import expressConfig from "./lib/webserver/express";

const app = express();
const server = http.createServer(app);

expressConfig(app, express);

serverConfig(server).startServer();

connectToDb();
