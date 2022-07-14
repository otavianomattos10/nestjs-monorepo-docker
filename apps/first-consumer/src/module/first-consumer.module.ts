import { Module } from '@nestjs/common';
import { FirstConsumerController } from '../controller/first-consumer.controller';
import { FirstConsumerService } from '../services/first-consumer.service';

@Module({
  imports: [],
  controllers: [FirstConsumerController],
  providers: [FirstConsumerService],
})
export class FirstConsumerModule {}
