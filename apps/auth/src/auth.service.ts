import { CreateUserDto, User } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  constructor(
  ) {}

  private users: User[] = []

  createUser(data: CreateUserDto): void {
    this.users.push({ ...data, id: this.users.length + 1})
    console.log(`Запушен ${data.name}`)
  }

  getUser(id: number): User {
    
    const user = this.users.find(user => user.id === id) || null
    console.log(`Найден ${user.name}`)
    return user
  }
}