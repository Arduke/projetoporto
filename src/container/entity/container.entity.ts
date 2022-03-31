import { Movimentation } from 'src/movimentation/entity/movimentation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CONTAINER_CATEGORY_ENUM } from '../enum/container_category.enum';
import { CONTAINER_STATUS_ENUM } from '../enum/container_status.enum';
import { CONTAINER_TYPE_ENUM } from '../enum/container_type.enum';

@Entity()
export class Container {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client: string;

  @Column()
  clientNumber: string;

  @Column({
    type: 'enum',
    enum: CONTAINER_TYPE_ENUM,
  })
  type: CONTAINER_TYPE_ENUM;

  @Column({
    type: 'enum',
    enum: CONTAINER_STATUS_ENUM,
  })
  status: CONTAINER_STATUS_ENUM;

  @Column({
    type: 'enum',
    enum: CONTAINER_CATEGORY_ENUM,
  })
  category: CONTAINER_CATEGORY_ENUM;

  // TO - DO OnetoMany
  @OneToMany(() => Movimentation, (movimentation) => movimentation.container)
  movimentations: Movimentation[];
}
