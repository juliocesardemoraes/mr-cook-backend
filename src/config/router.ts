import { Router } from "express";
import terceiroRouter from "../modules/terceiro/router.js";
import generalRouter from "../modules/general/router.js";

const router = Router();

router.use("/terceiros", terceiroRouter);
router.use("/all", generalRouter);

export default router;
