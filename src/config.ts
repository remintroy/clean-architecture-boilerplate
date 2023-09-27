function getConfig() {
  return {
    server: {
      name: process.env.SERVER_NAME || "Server",
      id: process.env.SERVER_ID || "1",
      port: process.env.PORT || 3000,
    },
  };
}

type getConfig = typeof getConfig;
export default getConfig;
