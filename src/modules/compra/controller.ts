import { Request, Response } from "express";
import { validate } from "./validator.js";
import { CompraRepository } from "./repository.js";

export class CompraController {
  static async create(req: Request, res: Response) {
    try {
      const validatedData = validate(req.body);

      const compra = await CompraRepository.createCompra(validatedData);

      return res.status(201).json({
        success: true,
        message: "Compra created successfully",
        data: compra,
      });
    } catch (error: any) {
      console.error("Error creating compra:", error);

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
      const compras = await CompraRepository.findAllCompras();

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
