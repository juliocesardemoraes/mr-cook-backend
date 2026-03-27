import { Router } from "express";
import { CompraController } from "./controller.js";
import { authMiddleware } from "../auth/middleware.js";

const compraRouter = Router();

compraRouter.get("/", authMiddleware, CompraController.findAll);

export default compraRouter;
