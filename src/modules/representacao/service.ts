import { Request, Response } from "express";
import { validate, IRepresentacao } from "./validator.js";
import { RepresentacaoRepository } from "./repository.js";

export class RepresentacaoService {
  static async create(body: IRepresentacao, res: Response) {
    try {
      const validatedData = validate(body);

      const representacao =
        await RepresentacaoRepository.createRepresentacao(validatedData);

      return res.status(201).json({
        success: true,
        message: "Representacao created successfully",
        data: representacao,
      });
    } catch (error: any) {
      console.error("Error creating representacao:", error);

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
      const compras = await RepresentacaoRepository.findAllRepresentacao();

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
