import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { QueryDto } from './dtos/query.dto';

@Controller('post')
export class PostController {
  @Inject(PostService)
  private readonly service: PostService;

  @Get('/')
  public getPosts(@Query() query: QueryDto): Promise<Post[]> {
    return this.service.getPosts({ categoryId: query.categoryId });
  }

  @Get('/:id')
  public getPost(@Param('id', ParseIntPipe) id: number): Promise<Post> {
    return this.service.getPost(id);
  }
}
