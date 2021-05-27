import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  create(user: User): User {
    return {
      id: 123,
      nome: user.nome,
      email: user.email,
      cpf: user.cpf,
      celular: user.celular,
      conhecimentos: user.conhecimentos,
      validado: false,
    };
  }
}
