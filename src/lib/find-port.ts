import net from "net";

export function findFreePort(start = 3000): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(start, () => {
      const port = (server.address() as net.AddressInfo).port;
      server.close(() => resolve(port));
    });
    server.on("error", () => {
      resolve(findFreePort(start + 1));
    });
  });
}
