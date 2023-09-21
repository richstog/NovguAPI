import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiGatewayService } from './api_gateway.service';
import { CreateUserDto } from '@app/common';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(`New user ${createUserDto.name}`)
    this.apiGatewayService.createUser(createUserDto);
  }
}
