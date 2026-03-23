import { z } from "zod";

export const terceiroSchema = z.object({
  nome: z.string().min(2, "Informe seu nome."),
  empresa: z.string().min(2, "Informe a empresa ou CNPJ."),
  cidade: z.string().min(2, "Informe sua cidade."),
  estado: z.string().min(2, "Informe seu estado."),
  tipoProjeto: z.string().min(1, "Selecione o tipo de projeto."),
  produtos: z.array(z.string()).min(1, "Selecione ao menos um produto."),
  volume: z.string().min(1, "Selecione o volume estimado."),
  embalagem: z.string().min(1, "Selecione a opção de embalagem."),
  prazo: z.string().min(1, "Selecione o prazo desejado."),
  whatsapp: z.string().min(8, "Informe o WhatsApp.").or(z.literal("")),
  email: z.string().email("E-mail inválido."),
  descricao: z.string().min(5, "Descreva o projeto."),
});

export const validate = (data: unknown) => {
  return terceiroSchema.parse(data);
};
