import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Category } from '../../../modules/category/category.entity';
import { Post } from '../../../modules/post/post.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const categories = await factory(Category)().createMany(15);

    const posts = await factory(Post)(categories).createMany(150);
  }
}
