import { Module, Logger } from '@nestjs/common';
import { MainReceiverController } from '../controller/main-receiver.controller';
import { MainReceiverService } from '../services/main-receiver.service';

@Module({
  imports: [],
  controllers: [MainReceiverController],
  providers: [MainReceiverService, Logger],
})
export class MainReceiverModule {}
