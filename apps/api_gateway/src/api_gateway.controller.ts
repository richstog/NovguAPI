import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiGatewayService } from './api_gateway.service';
import { CreateUserDto } from '@app/common';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.apiGatewayService.createUser(createUserDto);
  }
}
