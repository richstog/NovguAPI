import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { UserCreatedEvent } from '@app/common';

@Controller()
export class AuthController implements OnModuleInit{
  constructor(
    private readonly authService: AuthService,
    @Inject('TIMETABLE_SERVICE') private readonly timetableClient: ClientKafka
  ) {}

  onModuleInit() {
    this.timetableClient.subscribeToResponseOf('timetable_consumer')
  }

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(data: any) {
    this.authService.handleUserCreated(data)
  }

  
}
