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

  findAll(): User[] {
    return [
      {
        id: 123,
        nome: 'kevin 1',
        email: 'kevin1@teste',
        cpf: 123456789,
        celular: 123456789,
        conhecimentos: ['js', 'php', 'node'],
        validado: true,
      },
      {
        id: 124,
        nome: 'kevin 2',
        email: 'kevin2@teste',
        cpf: 987654321,
        celular: 987654321,
        conhecimentos: ['react', 'php', 'laravel'],
        validado: false,
      },
    ];
  }

  findOne(id: number): User {
    return {
      id: id,
      nome: 'kevin 2',
      email: 'kevin2@teste',
      cpf: 987654321,
      celular: 987654321,
      conhecimentos: ['react', 'php', 'laravel'],
      validado: false,
    };
  }
}
