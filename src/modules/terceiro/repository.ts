import { AppDataSource } from "../../database/data-source.js";
import { Terceiro } from "../../database/schema/Terceiro.js";

export const TerceiroRepository = AppDataSource.getRepository(Terceiro).extend({
  async createTerceiro(data: Partial<Terceiro>) {
    const terceiro = this.create(data);
    return await this.save(terceiro);
  },

  async findAllTerceiros(): Promise<Terceiro[]> {
    return await this.find({
      order: { createdAt: "DESC" },
    });
  },
});
