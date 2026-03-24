type RespostaSimNao = "sim" | "nao" | string;
type TipoSegmento =
  | "supermercado"
  | "restaurante"
  | "distribuidor"
  | "outros"
  | string;
type TipoTamanhoCarteira = "30_a_60" | "60_a_100" | "100_mais" | string;

export interface IRepresentacao {
  nome: string;
  cidade: string;
  estado: string;
  regiao_atuacao: string;
  ja_representante: RespostaSimNao;
  segmentos_atendidos: TipoSegmento[];
  tamanho_carteira: TipoTamanhoCarteira;
  whatsapp: string;
  email: string;
  observacoes: string;
  lgpd: boolean;
  type: "representacao";
}
