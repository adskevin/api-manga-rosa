import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AcquirementsService } from './acquirements/acquirements.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { AcquirementsModule } from './acquirements/acquirements.module';
import { User as UserModel } from './users/user.model';
import { Acquirement as AcquirementModel } from './acquirements/acquirements.model';
import { AcquirementsController } from './acquirements/acquirements.controller';
import config from './config/keys';

@Module({
  imports: [
    UsersModule,
    AcquirementsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: config.postgres.host,
      port: config.postgres.port,
      username: config.postgres.username,
      password: config.postgres.password,
      database: config.postgres.database,
      models: [UserModel, AcquirementModel],
    }),
  ],
  controllers: [AppController, UsersController, AcquirementsController],
  providers: [AppService, UsersService, AcquirementsService],
})
export class AppModule {}
