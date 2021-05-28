import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  nome: string;

  @Column
  email: string;

  @Column
  cpf: string;

  @Column
  celular: string;

  @Column({ defaultValue: false })
  validado: boolean;
}
