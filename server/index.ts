import express, { Request, Response } from "express";
import next from "next";
import * as dotenv from "dotenv";
import { Authentication } from "./google/authentification";
dotenv.config();
const PORT = process.env.PORT || 3000;

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
    res.status(200).send("success");
  } catch (error) {
    console.error("Error");
    res.status(404);
  }
});

/* server.get("/newdocument", async (req, res) => {
  try {
    const newDocument = await Authentication();
    res.status(200).send(newDocument);
  } catch (error) {
    console.error("Error");
    res.status(404);
  }
});
 */
