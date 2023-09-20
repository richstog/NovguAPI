import { NestFactory } from '@nestjs/core';
import { TimetableModule } from './timetable.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TimetableModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092']
        },
        consumer: {
          groupId: 'timetable_consumer'
        }
      }
    }
  )
  app.listen()
}
bootstrap();
