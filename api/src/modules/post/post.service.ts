import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { QueryType } from './types/query.types';

@Injectable()
export class PostService {
  @InjectRepository(Post)
  private readonly repository: Repository<Post>;

  public getPosts(filters: QueryType): Promise<Post[]> {
    return this.repository.find({
      where: {
        category: {
          id: filters.categoryId,
        },
      },
    });
  }

  public getPost(id: number): Promise<Post> {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }
}
