import { Container } from 'src/container/entity/container.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MOVIMENTATION_TYPE_ENUM } from '../enum/movimentation_type.enum';

@Entity()
export class Movimentation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: MOVIMENTATION_TYPE_ENUM,
  })
  type: MOVIMENTATION_TYPE_ENUM;

  @Column()
  dateStart: Date;

  @Column()
  dateEnd: Date;

  @Column()
  containerId: number;

  @ManyToOne(() => Container, (container) => container.movimentations)
  container: Container;
}
