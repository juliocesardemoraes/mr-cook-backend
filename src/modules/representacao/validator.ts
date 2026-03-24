import { z } from "zod";

export const representacaoSchema = z.object({
  nome: z.string().min(2, "Informe seu nome."),
  cidade: z.string().min(2, "Informe sua cidade."),
  estado: z.string().min(2, "Informe seu estado."),
  regiao_atuacao: z.string().min(2, "Informe a região de atuação."),
  ja_representante: z.enum(["sim", "nao"]),
  segmentos_atendidos: z
    .array(z.string())
    .min(1, "Selecione ao menos um segmento."),
  tamanho_carteira: z.enum(["ate_10", "10_a_30", "30_a_60", "mais_60"]),
  whatsapp: z.string().min(8, "Informe o WhatsApp.").or(z.literal("")),
  email: z.string().email("E-mail inválido."),
  observacoes: z.string().min(5, "Descreva suas observações."),
  lgpd: z
    .boolean()
    .refine((val) => val === true, "Você precisa aceitar a LGPD."),
  type: z.literal("representacao").default("representacao"),
});

export type IRepresentacao = z.infer<typeof representacaoSchema>;

export const validate = (data: IRepresentacao) => {
  return representacaoSchema.parse(data);
};
