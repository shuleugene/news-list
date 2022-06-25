import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public image: string;

  @Column({ type: 'varchar', length: 120 })
  public title: string;

  @Column({ type: 'varchar', length: 10000 })
  public description: string;

  @Column({ type: 'integer' })
  public likesQuantity: number;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
