import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { MOVIMENTATION_TYPE_ENUM } from '../enum/movimentation_type.enum';

export class MovimentationDTO {
  @IsNotEmpty()
  type: MOVIMENTATION_TYPE_ENUM;

  @IsDate()
  @IsNotEmpty()
  dateStart: Date;

  @IsDate()
  @IsNotEmpty()
  dateEnd: Date;

  @IsNumber()
  @IsNotEmpty()
  containerId: number;
}
