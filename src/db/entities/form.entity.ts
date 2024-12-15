import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "form_schema", name: "form" })
export class FormEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "first_name", type: "varchar" })
  first_name!: string;

  @Column({ name: "last_name", type: "varchar" })
  last_name!: string;

  @Column({ name: "address", type: "varchar" })
  address!: string;

  @Column({ name: "phone", type: "bigint" })
  phone!: number;

  @Column({ name: "email", type: "varchar" })
  email!: string;
}
