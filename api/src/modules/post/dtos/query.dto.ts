import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { QueryType } from '../types/query.types';

export class QueryDto implements QueryType {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  public page?: number = 1;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  public categoryId: number;
}
