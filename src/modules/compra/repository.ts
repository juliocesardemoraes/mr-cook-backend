import { AppDataSource } from "../../database/data-source.js";
import { Compra } from "../../database/schema/Compra.js";

export const CompraRepository = AppDataSource.getRepository(Compra).extend({
  async createCompra(data: Partial<Compra>) {
    const terceiro = this.create(data);
    return await this.save(terceiro);
  },

  async findAllCompras(): Promise<Compra[]> {
    return await this.find({
      order: { createdAt: "DESC" },
    });
  },
});
