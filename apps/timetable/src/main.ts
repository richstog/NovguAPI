import { NestFactory } from '@nestjs/core';
import { TimetableModule } from './timetable.module';

async function bootstrap() {
  const app = await NestFactory.create(TimetableModule);
  await app.listen(3000);
}
bootstrap();
