import { Controller, Get, Inject } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  @Inject(CategoryService)
  private readonly service: CategoryService;

  @Get('/')
  public getCategories(): Promise<Category[]> {
    return this.service.getCategories();
  }
}
