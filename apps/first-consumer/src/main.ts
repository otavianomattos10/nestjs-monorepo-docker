import { NestFactory } from '@nestjs/core';
import { FirstConsumerModule } from './module/first-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(FirstConsumerModule);
  await app.listen(3001);
}
bootstrap();
