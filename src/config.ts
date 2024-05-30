import dotenv from "dotenv";
dotenv.config();

function getConfig() {
  const configs: Configs = {
    server: {
      name: process.env.SERVER_NAME || "Server",
      id: process.env.SERVER_ID || "1",
      port: Number(process.env.PORT) || 3000,
      baseUrl: "/", // base url other than "/" should not end with "/" eg.. "/server/main/"(wrong) => "/server/main"(correct)
      isDevEnv: process.env.NODE_ENV != "PROD" || !process.env.NODE_ENV,
      nodeEnv: process.env.NODE_ENV == "PROD" ? "PROD" : "DEV",
    },
    mongodb: {
      url: process.env.MONGODB_URL || "mongodb://localhost:27017/test",
      db: process.env.MONGODB_DB || "server",
    },
    cors: {
      origin: ["*"],
    },
  };

  return configs;
}

type getConfig = typeof getConfig;
export default getConfig;
