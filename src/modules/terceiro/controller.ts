import { TerceiroRepository } from "./repository.js";
import { validate } from "./validator.js";
import { Request, Response } from "express";

export class TerceiroController {
  static async create(req: Request, res: Response) {
    try {
      const validatedData = validate(req.body);

      const terceiro = await TerceiroRepository.createTerceiro(validatedData);

      return res.status(201).json({
        success: true,
        message: "Terceiro created successfully",
        data: terceiro,
      });
    } catch (error: any) {
      console.error("Error creating terceiro:", error);

      if (error.code === "23505") {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }

      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const terceiros = await TerceiroRepository.findAllTerceiros();

      return res.status(200).json({
        success: true,
        data: terceiros,
        count: terceiros.length,
      });
    } catch (error: any) {
      console.error("Error fetching terceiros:", error);

      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }
}
