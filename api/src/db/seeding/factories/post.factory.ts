import { faker as Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Post } from '../../../modules/post/post.entity';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

define(Post, (faker: typeof Faker, categories) => {
  const PostInstance = new Post();
  PostInstance.title = faker.name.jobTitle();
  PostInstance.description = faker.lorem.paragraph(100);

  PostInstance.image = faker.image
    .abstract(undefined, undefined, true)
    .replace('lorempixel', 'loremflickr');
  PostInstance.likesQuantity = getRandomInt(0, 100000);

  PostInstance.category = categories[getRandomInt(1, 14)];
  return PostInstance;
});
