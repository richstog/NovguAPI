import { Controller, Get } from '@nestjs/common';
import { TimetableService } from './timetable.service';

@Controller()
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Get()
  getHello(): string {
    return this.timetableService.getHello();
  }
}
