import express, { json, Request, Response } from "express";


const app = express();
app.use(json());

app.get("/", (req, res) => {
  req.send("Você se conectou ao meu servidor!")
});

export default app;