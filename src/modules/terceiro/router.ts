import { Router } from "express";
import { TerceiroController } from "./controller.js";

const terceiroRouter = Router();

terceiroRouter.post("/", TerceiroController.create);
terceiroRouter.get("/", TerceiroController.findAll);

export default terceiroRouter;
