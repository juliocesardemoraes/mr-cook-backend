import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source.js";
import router from "./config/router.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposedHeaders: ["X-Total-Count"],
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ working: true });
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use("/api", router);

app.listen(process.env.PORT ?? "3002");

console.log("Server listening on port", process.env.PORT);
console.log(`http://localhost:${process.env.PORT}/`);

export default app;
