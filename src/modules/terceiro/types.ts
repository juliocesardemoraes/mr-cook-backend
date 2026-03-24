type TipoProjeto = "white_label" | "terceirizacao" | string;
type TipoProduto = "batata_palha" | "mandioca" | "inhame" | string;
type TipoVolume = "300_a_1000" | "1000_a_5000" | "5000_mais" | string;
type TipoEmbalagem = "tenho_fornecedor" | "preciso_fornecedor" | string;
type TipoPrazo = "30_dias" | "60_dias" | "90_dias" | string;

export interface ITerceiro {
  nome: string;
  empresa: string;
  cidade: string;
  estado: string;
  tipoProjeto: TipoProjeto;
  produtos: TipoProduto[];
  volume: TipoVolume;
  embalagem: TipoEmbalagem;
  prazo: TipoPrazo;
  whatsapp: string;
  email: string;
  descricao: string;
  lgpd: boolean;
  type: "terceiro";
}
