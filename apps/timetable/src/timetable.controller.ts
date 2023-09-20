import { Controller, Get } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Get()
  getHello(): string {
    return this.timetableService.getHello();
  }

  @MessagePattern('get_timetable')
  getTimetable(data: any) {
    return this.timetableService.getTimetable(data)
  }
}
