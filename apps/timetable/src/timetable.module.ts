import { Module } from '@nestjs/common';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092']
          },
          consumer: {
            groupId: 'auth_consumer'
          }
        }
      }
  ])
  ],
  controllers: [TimetableController],
  providers: [TimetableService],
})
export class TimetableModule {}
