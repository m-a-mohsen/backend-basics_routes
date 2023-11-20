import { createServer } from "node:http";

export const PORT = 8000;
export const server = createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/api/fish/1") {
      res.statusCode = 200;
      return res.end("Shrimp");
    }
    if (req.url === "/api/fish/2") {
      res.statusCode = 200;
      return res.end("Anemonefish");
    }
  }
  res.statusCode = 404;
  res.end("Not found");
});
