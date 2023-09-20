import { GetUserEvent } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TimetableService {
  
  private readonly users: any[] = [
    {
      login: "login",
      email: "login@mail.ru",
    },
    {
      login: "richstog",
      email: "richstog@mail.ru",
    }
  ]
  getTimetable(getUserEvent: GetUserEvent) {
    return this.users.find(user => { user.login === getUserEvent.login})
  }
  getHello(): string {
    return 'Hello World!';
  }
}
