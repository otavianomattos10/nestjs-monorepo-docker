import {
  DeleteFirstConsumerDTO,
  PostFirstConsumerDTO,
  PutFirstConsumerDTO,
} from './../dto/first-consumer.dto';
import { FirstConsumerFactory } from './../factory/first-consumer.factory';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstConsumerService {
  async getById(id: string): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.getById(id);
  }

  async getAll(): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.getAll();
  }

  async update(firstConsumerData: PutFirstConsumerDTO): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.update(firstConsumerData);
  }

  async create(firstConsumerData: PostFirstConsumerDTO): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.create(firstConsumerData);
  }

  async remove(firstConsumerData: DeleteFirstConsumerDTO): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.remove(firstConsumerData);
  }
}
