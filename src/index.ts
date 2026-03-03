import express from "express";
import cors from "cors";
import { sendMail } from "./mailer/service";

const app = express();
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ working: true });
});

app.get("/send-mail", (req, res) => {
  const response = sendMail();
  res.status(200).send({ working: true, response });
});

app.listen(process.env.PORT ?? "3002");

console.log("Server listening on port", process.env.PORT);
console.log(`http://localhost:${process.env.PORT}/`);

export default app;
