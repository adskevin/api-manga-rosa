export class CreateUserDto {
  readonly nome: string;
  readonly email: string;
  readonly cpf: number;
  readonly celular: number;
  readonly conhecimentos: string[];
  readonly validado: boolean;
}
