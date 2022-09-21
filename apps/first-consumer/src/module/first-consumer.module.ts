import { Logger, Module } from '@nestjs/common';
import { FirstConsumerController } from '../controller/first-consumer.controller';
import { FirstConsumerService } from '../services/first-consumer.service';
import {
  PrometheusModule,
  makeCounterProvider,
} from '@willsoto/nestjs-prometheus';

@Module({
  imports: [PrometheusModule.register()],
  controllers: [FirstConsumerController],
  providers: [
    FirstConsumerService,
    Logger,
    makeCounterProvider({
      name: 'metric_firstconsumer',
      help: 'metrica de teste do projeto first-consumer',
      labelNames: ['domain', 'status'],
    }),
  ],
})
export class FirstConsumerModule {}
