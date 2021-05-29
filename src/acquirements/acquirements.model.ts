import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Acquirement extends Model {
  @Column
  nome: string;
}
