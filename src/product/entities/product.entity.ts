import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Category } from '../../category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_products' })
export class Product {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 5, scale: 2 })
  @ApiProperty()
  price: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  description: string;

  @Column({ length: 2000, nullable: true })
  @ApiProperty()
  buyers: string;

  @ApiProperty({ type: () => Category})
  @ManyToOne(() => Category, (category) => category.product,{
    onDelete: "CASCADE"
})
category: Category

  @ApiProperty({ type: () => User})
  @ManyToOne(() => User, (user) => user.product, {
    onDelete: "CASCADE"
  })
  user: User;
}
