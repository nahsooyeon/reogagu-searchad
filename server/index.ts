import express, { Request, Response } from "express";
import next from "next";
import * as dotenv from "dotenv";
import { Authentication } from "./google/authentification";
dotenv.config();
const PORT = process.env.PORT || 3000;

/*const dev = process.env.NODE_ENV !== "production";
 const app = next({ dev });

const handle = app.getRequestHandler();


(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
 */

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }
}

const server = new Server().app;
server.set("port", PORT);

server
  .listen(server.get("port"), () => {
    console.log(`${server.get("port")} server is Running`);
  })
  .on("error", (err) => {
    console.log(`Error Message ${err}`);
  });

server.get("/", async (req, res) => {
  try {
    const { sheets } = await Authentication();
    const response = await sheets.spreadsheets.values.get({})
  } catch (e) {}
});
