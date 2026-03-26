import { Router } from "express";
import * as AuthController from "./controller.js";
import { authMiddleware } from "./middleware.js";

const authRouter = Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

authRouter.get("/profile", authMiddleware, (req: any, res) => {
  res.json({ user: req.user });
});

export default authRouter;
