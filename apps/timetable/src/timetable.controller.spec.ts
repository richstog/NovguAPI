import { Test, TestingModule } from '@nestjs/testing';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';

describe('TimetableController', () => {
  let timetableController: TimetableController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TimetableController],
      providers: [TimetableService],
    }).compile();

    timetableController = app.get<TimetableController>(TimetableController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(timetableController.getHello()).toBe('Hello World!');
    });
  });
});
