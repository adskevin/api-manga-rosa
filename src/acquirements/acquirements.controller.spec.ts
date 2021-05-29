import { Test, TestingModule } from '@nestjs/testing';
import { AcquirementsController } from './acquirements.controller';

describe('AcquirementsController', () => {
  let controller: AcquirementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcquirementsController],
    }).compile();

    controller = module.get<AcquirementsController>(AcquirementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
