import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Movimentation } from 'src/movimentation/entity/movimentation.entity';
import { CONTAINER_CATEGORY_ENUM } from '../enum/container_category.enum';
import { CONTAINER_STATUS_ENUM } from '../enum/container_status.enum';
import { CONTAINER_TYPE_ENUM } from '../enum/container_type.enum';

export class ContainerDTO {
  @IsNotEmpty()
  @IsString()
  client: string;

  @Length(11)
  @IsString()
  @IsNotEmpty()
  clientNumber: string;

  @IsString()
  @IsNotEmpty()
  type: CONTAINER_TYPE_ENUM;

  @IsString()
  @IsNotEmpty()
  status: CONTAINER_STATUS_ENUM;

  @IsString()
  @IsNotEmpty()
  category: CONTAINER_CATEGORY_ENUM;

  movimentations: Movimentation[];
}
