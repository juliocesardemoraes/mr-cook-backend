import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("representacao")
export class Representacao {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text", unique: true })
  email: string | null;

  @Column({ type: "text" })
  cidade: string;

  @Column({ type: "text" })
  estado: string;

  @Column({ type: "text" })
  regiao_atuacao: string;

  @Column({ type: "text" })
  ja_representante: string;

  @Column({ type: "json", nullable: true })
  segmentos_atendidos: string[];

  @Column({ type: "text" })
  tamanho_carteira: string;

  @Column({ type: "text" })
  whatsapp: string;

  @Column({ type: "text", nullable: true })
  observacoes: string | null;
}
