import { z } from "zod";

export const compraSchema = z.object({
  nome: z.string().min(2, "Informe seu nome."),
  email: z.string().email("E-mail inválido."),
  cidade: z.string().min(2, "Informe sua cidade."),
  estado: z.string().min(2, "Informe seu estado."),
  empresa: z.string().min(2, "Informe a empresa."),
  segmento: z.string().min(1, "Selecione o segmento."),
  volume: z.string().min(1, "Selecione o volume estimado."),
  contato: z.string().min(1, "Selecione a forma de contato."),
  whatsapp: z.string().min(8, "Informe o WhatsApp.").or(z.literal("")),
  lgpd: z
    .boolean()
    .refine((val) => val === true, "Você precisa aceitar a LGPD."),
});

export type ICompra = z.infer<typeof compraSchema>;

export const validate = (data: ICompra) => {
  return compraSchema.parse(data);
};
