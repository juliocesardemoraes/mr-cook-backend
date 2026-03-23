import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("compra")
export class Compra {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text", nullable: true })
  email: string | null;

  @Column({ type: "text" })
  cidade: string;

  @Column({ type: "text" })
  estado: string;

  @Column({ type: "text" })
  empresa: string;

  @Column({ type: "text" })
  segmento: string;

  @Column({ type: "text" })
  volume: string;

  @Column({ type: "text" })
  contato: string;

  @Column({ type: "text", nullable: true })
  whatsapp: string | null;
}
