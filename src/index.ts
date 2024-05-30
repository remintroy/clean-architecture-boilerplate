import "./globals";
import connectToDB from "./lib/database/connection";
import startWebServer from "./lib/webserver";

connectToDB();

startWebServer();
