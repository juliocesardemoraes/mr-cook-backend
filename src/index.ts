import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  }),
);
app.use(express.json());

app.use("/", (req, res) => {
  res.status(200).send({ working: true });
});

app.listen(process.env.PORT ?? "3002");

console.log("Server listening on port", process.env.PORT);
console.log(`http://localhost:${process.env.PORT}/`);

export default app;
