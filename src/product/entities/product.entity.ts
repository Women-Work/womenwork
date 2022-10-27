import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import { Category } from '../../category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  title: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @IsNotEmpty()
  @Column({ length: 300, nullable: false })
  description: string;

  @Column({ length: 1000, nullable: true })
  buyers: string;

  @ManyToOne(() => Category, (category) => category.product,{
    onDelete: "CASCADE"
})
category: Category

  @ManyToOne(() => User, (user) => user.product, {
    onDelete: "CASCADE"
  })
  user: User;
}
