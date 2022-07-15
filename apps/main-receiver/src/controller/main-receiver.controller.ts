import {
  DeleteMainReceiverDTO,
  PostMainReceiverDTO,
  PutMainReceiverDTO,
} from './../dto/main-receiver.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MainReceiverService } from '../services/main-receiver.service';

@Controller()
export class MainReceiverController {
  constructor(
    private readonly mainReceiverService: MainReceiverService,
    private logger: Logger,
  ) {}

  @Get('/id/:id/route/:route/origin/:origin')
  async getById(
    @Param('id') id: string,
    @Param('route') route: string,
    @Param('origin') origin: string,
  ): Promise<string> {
    console.log(
      JSON.stringify(
        `{"newid":${id},"description":"Teste de envio com o ID: ${id}","route":"${route}","origin":"${origin}"}`,
      ),
    );
    return await this.mainReceiverService.getById(id);
  }

  @Get('/all')
  async getAll(): Promise<string> {
    return await this.mainReceiverService.getAll();
  }

  @Post()
  async create(
    @Body() postmainReceiverDTO: PostMainReceiverDTO,
  ): Promise<string> {
    return await this.mainReceiverService.create(postmainReceiverDTO);
  }

  @Put()
  async update(
    @Body() putmainReceiverDTO: PutMainReceiverDTO,
  ): Promise<string> {
    return await this.mainReceiverService.update(putmainReceiverDTO);
  }

  @Delete()
  async remove(
    @Body() deletemainReceiverDTO: DeleteMainReceiverDTO,
  ): Promise<string> {
    return await this.mainReceiverService.delete(deletemainReceiverDTO);
  }
}
