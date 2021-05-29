import { Controller, Get, Post, Body } from '@nestjs/common';
import { Acquirement } from './acquirements.model';
import { AcquirementsService } from './acquirements.service';

@Controller('acquirements')
export class AcquirementsController {
  constructor(private readonly acquirementsService: AcquirementsService) {}

  @Get()
  findAll(): Promise<Acquirement[]> {
    return this.acquirementsService.findAll();
  }

  @Post()
  create(@Body() acquirementModel: Acquirement): Promise<Acquirement> {
    return this.acquirementsService.create(acquirementModel);
  }
}
