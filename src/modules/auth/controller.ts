import { Request, Response } from "express";
import * as AuthService from "./service.js";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.register(email, password);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    res.json(result);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};
