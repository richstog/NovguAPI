import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MakePaymentDto } from '@app/common';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @EventPattern('process_payment')
  handleProcessPayment(@Payload() data: MakePaymentDto) {
    this.paymentService.processPayment(data)
  }
}
