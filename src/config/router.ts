import { Router } from "express";
import terceiroRouter from "../modules/terceiro/router.js";

const router = Router();

router.use("/terceiros", terceiroRouter);

export default router;
