import { faker as Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';

import { Category } from '../../../modules/category/category.entity';

define(Category, (faker: typeof Faker) => {
  const CategoryInstance = new Category();
  const fakeName = faker.name.jobArea();
  CategoryInstance.name = fakeName;
  return CategoryInstance;
});
