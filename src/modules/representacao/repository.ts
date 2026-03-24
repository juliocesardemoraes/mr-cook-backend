import { AppDataSource } from "../../database/data-source.js";
import { Representacao } from "../../database/schema/Representacao.js";

export const RepresentacaoRepository = AppDataSource.getRepository(
  Representacao,
).extend({
  async createRepresentacao(data: Partial<Representacao>) {
    const representacao = this.create(data);
    return await this.save(representacao);
  },

  async findAllRepresentacao(): Promise<Representacao[]> {
    return await this.find({
      order: { createdAt: "DESC" },
    });
  },
});
