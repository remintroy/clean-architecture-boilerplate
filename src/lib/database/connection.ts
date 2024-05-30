import mongoose from "mongoose";

export default function connectToDB() {
  const connectionUrl = config.mongodb.url;

  if (!connectionUrl) {
    console.log(`[${config.server.id ?? "server"}] MOGNODB ERROR: Mongodb url is not porvided`);
    process.exit();
  }

  mongoose
    .connect(connectionUrl)
    .then(() => {})
    .catch((err: Error) => {
      console.log(`[${config.server.id ?? "server"}] MONGODB ERROR:`, err);
    });
}

function onConnected() {
  console.info(`[${config.server.id ?? "server"}] DB Connected to ${config.mongodb.db}`);
}

function onReConnected() {
  console.info(`[${config.server.id ?? "server"}] MongoDB reconnected!`);
}

function onError(error: Error) {
  console.error(`[${config.server.id ?? "server"}] Error in MongoDb connection: `, error);
  mongoose.disconnect();
}

function onDisconnect() {
  console.error(`[${config.server.id ?? "server"}] MongoDB disconnected! Reconnecting in 10s`);
  setTimeout(() => connectToDB(), 10000);
}

mongoose.connection.on("connected", onConnected);
mongoose.connection.on("reconnected", onReConnected);
mongoose.connection.on("error", onError);
mongoose.connection.on("disconnected", onDisconnect);
