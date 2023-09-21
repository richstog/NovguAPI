import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([
    {
      name: 'TIMETABLE_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'timetable',
          brokers: ['localhost:9092']
        },
        consumer: {
          groupId: 'timetable_consumer'
        }
      }
    }
  ])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}