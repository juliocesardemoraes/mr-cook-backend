import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("terceiro")
export class Terceiro {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "text" })
  empresa: string;

  @Column({ type: "text" })
  cidade: string;

  @Column({ type: "text" })
  estado: string;

  @Column({ type: "text" })
  tipoProjeto: string;

  @Column({ type: "json", nullable: true })
  produtos: string[];

  @Column({ type: "text" })
  volume: string;

  @Column({ type: "text" })
  embalagem: string;

  @Column({ type: "text" })
  prazo: string;

  @Column({ type: "text", nullable: true })
  whatsapp: string | null;

  @Column({ type: "text" })
  descricao: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  updatedAt: Date;
}
