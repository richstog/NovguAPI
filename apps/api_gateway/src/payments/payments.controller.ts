import { MakePaymentDto } from '@app/common';
import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';


@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentService: PaymentsService) {}

    @Post('pay')
    makePayment(@Body() makePaymentDto: MakePaymentDto) {
        return this.paymentService.makePayment(makePaymentDto)
    }
}
