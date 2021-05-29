import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userModel: User): Promise<User> {
    return this.usersService.create(userModel);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id/:action')
  validate(@Param() params: string[]): Promise<User> {
    return this.usersService.validate(params);
  }
}
