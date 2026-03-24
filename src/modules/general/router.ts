import { Router } from "express";
import { GeneralController } from "./controller.js";

const generalRouter = Router();

generalRouter.post("/", GeneralController.findSpecificRouter);

export default generalRouter;
