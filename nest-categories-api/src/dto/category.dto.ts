import { IsString, IsNotEmpty } from 'class-validator';

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
