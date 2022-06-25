import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  @InjectRepository(Category)
  private readonly repository: Repository<Category>;

  public getCategories(): Promise<Category[]> {
    return this.repository.find({});
  }
}
