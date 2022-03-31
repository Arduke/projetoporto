import { ContainerController } from './container.controller';
import { ContainerService } from './container.service';
import { Module } from '@nestjs/common';
import { Container } from './entity/container.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Container])],
  controllers: [ContainerController],
  providers: [ContainerService],
})
export class ContainerModule {}
