import { Router } from "express";
import terceiroRouter from "../modules/terceiro/router.js";
import generalRouter from "../modules/general/router.js";
import authRouter from "../modules/auth/routes.js";

const router = Router();

router.use("/terceiros", terceiroRouter);
router.use("/all", generalRouter);
router.use("/auth", authRouter);

export default router;
