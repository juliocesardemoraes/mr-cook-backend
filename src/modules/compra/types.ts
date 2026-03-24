type TipoContato = "whatsapp" | "email" | "telefone";
type TipoSegmento = "supermercado" | "restaurante" | "distribuidor" | string;
type TipoVolume = "300_a_1000" | "1000_a_5000" | "5000_mais" | string;

export interface ICompra {
  nome: string;
  email: string;
  cidade: string;
  estado: string;
  empresa: string;
  segmento: TipoSegmento;
  volume: TipoVolume;
  contato: TipoContato;
  whatsapp: string;
  lgpd: boolean;
  type: "compra";
}
