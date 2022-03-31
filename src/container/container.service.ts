import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContainerDTO } from './dto/container.dto';
import { Container } from './entity/container.entity';

@Injectable()
export class ContainerService {
  constructor(
    @InjectRepository(Container)
    private containerRepository: Repository<Container>,
  ) {}

  //FindAll
  async showAll() {
    try {
      return await this.containerRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  //FindById
  async showById(id: number) {
    try {
      const container = await this.containerRepository.findOne(id);
      if (!container) {
        throw new BadRequestException('Não foi encontrado');
      }
      return container;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  //Create
  async create(containerDto: ContainerDTO) {
    try {
      const container = this.containerRepository.create(containerDto);
      await this.containerRepository.save(container);
      return container;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  //Update
  async update(containerDto: ContainerDTO, id: number) {
    try {
      await this.containerRepository.update({ id }, containerDto);
      return await this.containerRepository.findOne(id);
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  //Delete
  async delete(id: number) {
    try {
      const deleteContainer = await this.containerRepository.delete(id);
      return deleteContainer;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }
}
