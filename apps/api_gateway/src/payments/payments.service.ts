import { MakePaymentDto } from '@app/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
    constructor(@Inject('PAYMENT_MICROSERVICE') private readonly paymentClient: ClientKafka) {}
  
    makePayment(makePaymentDto: MakePaymentDto) {
        console.log(`User ${makePaymentDto.userId} Given ${makePaymentDto.amount}`)
        this.paymentClient.emit('process_payment', JSON.stringify(makePaymentDto))
    }
}
