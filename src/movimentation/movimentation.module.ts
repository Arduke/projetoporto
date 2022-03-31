import { MovimentationController } from './movimentation.controller';
import { MovimentationService } from './movimentation.service';
import { Module } from '@nestjs/common';
import { Movimentation } from './entity/movimentation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Movimentation])],
  controllers: [MovimentationController],
  providers: [MovimentationService],
})
export class MovimentationModule {}
