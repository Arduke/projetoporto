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
import { MovimentationDTO } from './dto/movimentation.dto';
import { MovimentationService } from './movimentation.service';

@Controller('movimentation')
export class MovimentationController {
  constructor(private movimentationService: MovimentationService) {}

  @Get()
  async showAllMovimentation() {
    const movimentations = await this.movimentationService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Lista com todos as movimentacoes cadastrados',
      movimentations,
    };
  }

  @Get('sumarry')
  async sumarry() {
    return await this.movimentationService.sumarry();
  }

  @Get(':id')
  async showMovimentationById(@Param('id') id: number) {
    const movimentation = await this.movimentationService.showById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Movimentacao encontrado',
      movimentation,
    };
  }

  @Post()
  async createMovimentation(@Body() movimentationDTO: MovimentationDTO) {
    const movimentation = await this.movimentationService.create(
      movimentationDTO,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Movimentation criado',
      movimentation,
    };
  }

  @Patch(':id')
  async updateMovimentation(
    @Body() movimentationDTO: MovimentationDTO,
    @Param('id') id: number,
  ) {
    const updatedMovimentation = await this.movimentationService.update(
      movimentationDTO,
      id,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Movimentation atualizado',
      updatedMovimentation,
    };
  }

  @Delete(':id')
  async deleteMovimentation(@Param('id') id: number) {
    const deleted = await this.movimentationService.delete(id);
    console.log('deleted', deleted);
    return {
      statusCode: HttpStatus.OK,
      message: 'Movimentation deletado',
    };
  }
}
