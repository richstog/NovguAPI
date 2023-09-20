import { UserCreatedEvent, GetUserEvent } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthService {

  constructor(
    @Inject('TIMETABLE_SERVICE') private readonly timetableClient: ClientKafka
  ) {}

  handleUserCreated(userCreatedEvent: UserCreatedEvent) {
    this.timetableClient.send('get_timetable', new GetUserEvent(userCreatedEvent.login)).subscribe((user) => {console.log(user)})
    console.log(userCreatedEvent)
  }
  getHello(): string {
    return 'Hello World!';
  }
}
