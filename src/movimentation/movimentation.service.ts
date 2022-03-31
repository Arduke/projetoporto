import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimentationDTO } from './dto/movimentation.dto';
import { Movimentation } from './entity/movimentation.entity';

@Injectable()
export class MovimentationService {
  constructor(
    @InjectRepository(Movimentation)
    private movimentationRepository: Repository<Movimentation>,
  ) {}

  async findAll() {
    try {
      return await this.movimentationRepository.find();
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async showById(id: number) {
    try {
      const movimentation = await this.movimentationRepository.findOne(id);
      if (!movimentation) {
        return new BadRequestException('Não foi encontrado a movimentação');
      }
      return movimentation;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async create(movimentationDTO: MovimentationDTO) {
    try {
      const newMovimentation =
        this.movimentationRepository.create(movimentationDTO);
      await this.movimentationRepository.save(newMovimentation);
      return newMovimentation;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async update(movimentationDTO: MovimentationDTO, id: number) {
    try {
      await this.movimentationRepository.update({ id }, movimentationDTO);
      return await this.movimentationRepository.findOne(id);
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async delete(id: number) {
    try {
      const deleted = await this.movimentationRepository.delete(id);
      return deleted;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async sumarry() {
    try {
      const sumarryTotal = await this.movimentationRepository.query(
        'select container.category, count(container.category) as totalImportacao from movimentation INNER JOIN container ON container.id = movimentation.containerId group by container.category',
      );
      const sumarryCorpo = await this.movimentationRepository.query(
        'select container.client, movimentation.type, COUNT(movimentation.type) as totalMovimentation from movimentation INNER JOIN container ON container.id = movimentation.containerId group by client, movimentation.type',
      );
      return sumarryCorpo;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }
}
