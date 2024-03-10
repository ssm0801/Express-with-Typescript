import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 8888;

app.get("/api/ping", (req, res) => {
  res.send("Pinged!");
});

app.listen(port);
