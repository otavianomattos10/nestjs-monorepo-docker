import {
  DeleteFirstConsumerDTO,
  PutFirstConsumerDTO,
} from './../dto/first-consumer.dto';
import { PostFirstConsumerDTO } from './../dto/first-consumer.dto';
import { FirstConsumerService } from './../services/first-consumer.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class FirstConsumerGrpcServerController {
  constructor(private firstConsumerService: FirstConsumerService) {}

  @GrpcMethod('FirstConsumerService')
  create(data: PostFirstConsumerDTO) {
    return this.firstConsumerService.create(data);
  }

  @GrpcMethod('FirstConsumerService')
  update(id: PutFirstConsumerDTO) {
    return this.firstConsumerService.update(id);
  }

  @GrpcMethod('FirstConsumerService')
  getById(data: { id: string }) {
    const { id } = data;
    return this.firstConsumerService.getById(id);
  }

  @GrpcMethod('FirstConsumerService')
  async getAll() {
    const result = await this.firstConsumerService.getAll();
    return { data: result };
  }

  @GrpcMethod('FirstConsumerService', 'Delete')
  async remove(id: DeleteFirstConsumerDTO) {
    return await this.firstConsumerService.remove(id);
  }
}
