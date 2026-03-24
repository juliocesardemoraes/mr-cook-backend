import { Request, Response } from "express";
import { validate } from "./validator.js";
import { TerceiroRepository } from "./repository.js";
import { ITerceiro } from "./types.js";

export class TerceiroService {
  static async create(body: ITerceiro, res: Response) {
    try {
      const validatedData = validate(body);

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
      const compras = await TerceiroRepository.findAllTerceiros();

      return res.status(200).json({
        success: true,
        data: compras,
        count: compras.length,
      });
    } catch (error: any) {
      console.error("Error fetching compras:", error);

      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }
}
