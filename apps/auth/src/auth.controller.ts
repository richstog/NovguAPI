import { Controller, Get, Inject, OnModuleInit, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientKafka, EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@app/common';

@Controller()
export class AuthController{
  constructor(
    private readonly authService: AuthService,
  ) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload() data: CreateUserDto) {
    this.authService.createUser(data)
  }

  @MessagePattern('get_user')
  handleGetUser(@Payload('userId') userId: number) {
    return this.authService.getUser(userId)
  }
}