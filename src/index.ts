import "./globals";
import connectToDb from "./lib/database/connection";
import startWebServer from "./lib/webserver";

connectToDb();

startWebServer();
