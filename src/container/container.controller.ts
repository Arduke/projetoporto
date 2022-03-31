import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContainerService } from './container.service';
import { ContainerDTO } from './dto/container.dto';

@Controller('container')
export class ContainerController {
  constructor(private containerService: ContainerService) {}

  @Get()
  async showAllContainer() {
    const containers = await this.containerService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Lista com todos os containers cadastrados',
      containers,
    };
  }

  @Get(':id')
  async showContainerById(@Param('id') id: number) {
    const container = await this.containerService.showById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Container encontrado',
      container,
    };
  }

  @Post()
  async createContainer(@Body() containerDTO: ContainerDTO) {
    const container = await this.containerService.create(containerDTO);
    return {
      statusCode: HttpStatus.OK,
      message: 'Container criado',
      container,
    };
  }

  @Patch(':id')
  async updateContainer(
    @Body() containerDTO: ContainerDTO,
    @Param('id') id: number,
  ) {
    const updatedContainer = await this.containerService.update(
      containerDTO,
      id,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Container atualizado',
      updatedContainer,
    };
  }

  @Delete(':id')
  async deleteContainer(@Param('id') id: number) {
    const deleted = await this.containerService.delete(id);
    console.log('deleted', deleted);
    return {
      statusCode: HttpStatus.OK,
      message: 'Container deletado',
    };
  }
}
