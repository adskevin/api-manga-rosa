import { Module } from '@nestjs/common';
import { AcquirementsController } from './acquirements.controller';
import { AcquirementsService } from './acquirements.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Acquirement } from './acquirements.model';

@Module({
  imports: [SequelizeModule.forFeature([Acquirement])],
  exports: [SequelizeModule],
  controllers: [AcquirementsController],
  providers: [AcquirementsService],
})
export class AcquirementsModule {}
