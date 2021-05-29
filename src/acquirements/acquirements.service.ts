import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Acquirement } from './acquirements.model';

@Injectable()
export class AcquirementsService {
  constructor(
    @InjectModel(Acquirement)
    private acquirementModel: typeof Acquirement,
  ) {}

  findAll(): Promise<Acquirement[]> {
    return this.acquirementModel.findAll();
  }

  create(acquirement: Acquirement): Promise<Acquirement> {
    return this.acquirementModel.create(acquirement);
  }
}
