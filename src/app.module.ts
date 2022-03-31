import { MovimentationModule } from './movimentation/movimentation.module';
import { ContainerModule } from './container/container.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimentation } from './movimentation/entity/movimentation.entity';
import { Container } from './container/entity/container.entity';

@Module({
  imports: [
    MovimentationModule,
    ContainerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'K.Martins00',
      database: 'projetoporto',
      entities: [Movimentation, Container],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
