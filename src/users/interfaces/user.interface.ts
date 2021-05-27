export interface User {
  id?: number;
  nome: string;
  email: string;
  cpf: number;
  celular: number;
  conhecimentos: string[];
  validado: boolean;
}
