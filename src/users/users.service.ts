import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async validate(params: string[]): Promise<User> {
    const id = params['id'];
    const action = params['action'];
    const user = await this.userModel.findByPk(id);
    switch (action) {
      case 'validate':
        user.validado = true;
        break;
      case 'invalidate':
        user.validado = false;
        break;
      default:
        return;
    }
    return user.save();
  }
}
