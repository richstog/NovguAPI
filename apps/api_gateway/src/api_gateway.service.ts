import { CreateUserDto } from '@app/common';
import { UserCreatedEvent } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { create } from 'domain';

@Injectable()
export class ApiGatewayService {

  constructor(@Inject('AUTH_SERVICE') private readonly authClient: ClientKafka) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserDto: CreateUserDto) {
    this.authClient.emit(
      'user_created',
      new UserCreatedEvent(createUserDto.login, createUserDto.password)
    )
  }
}
