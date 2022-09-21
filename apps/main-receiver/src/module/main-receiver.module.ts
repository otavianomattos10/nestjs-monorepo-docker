import { Module, Logger } from '@nestjs/common';
import {
  PrometheusModule,
  makeCounterProvider,
} from '@willsoto/nestjs-prometheus';
import { MainReceiverController } from '../controller/main-receiver.controller';
import { MainReceiverService } from '../services/main-receiver.service';

@Module({
  imports: [PrometheusModule.register()],
  controllers: [MainReceiverController],
  providers: [
    MainReceiverService,
    Logger,
    makeCounterProvider({
      name: 'metric_mainreceiver',
      help: 'metrica de teste do projeto main-receiver',
      labelNames: ['domain', 'status'],
    }),
  ],
})
export class MainReceiverModule {}
