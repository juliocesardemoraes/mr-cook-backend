import { Request, Response } from "express";
import { CompraService } from "../compra/service.js";
import { TerceiroService } from "../terceiro/service.js";
import { RepresentacaoService } from "../representacao/service.js";

export class GeneralController {
  static async findSpecificRouter(request: Request, response: Response) {
    try {
      const { type } = request.body;

      if (!type) {
        return response.status(400).json({
          success: false,
          message: "Missing required field: type",
        });
      }

      let result;

      console.log(type);
      console.log(request.body);

      switch (type) {
        case "compra":
          result = await CompraService.create(request.body, response);
          break;
        case "terceiro":
          result = await TerceiroService.create(request.body, response);
          break;
        case "representacao":
          result = await RepresentacaoService.create(request.body, response);
          break;
        default:
          return response.status(400).json({
            success: false,
            message: `Invalid type: ${type}. Expected one of: compra, representacao, terceiro`,
          });
      }

      return;
    } catch (error: any) {
      console.error("Error creating form", error);
      return;
    }
  }
}
