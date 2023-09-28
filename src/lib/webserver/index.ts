// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function serverConfig(server: any) {
  const startServer = () => {
    server.listen(config.server.port, () => {
      console.log(`[${config.server.id}] ${config.server.name} is started on ${config.server.port}`);
    });
  };

  return {
    startServer,
  };
}
