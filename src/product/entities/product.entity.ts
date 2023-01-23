import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from '../../category/entities/category.entity';
import { User } from '../../users/entities/user.entity';

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

  @ApiProperty({ type: () => Category })
  @ManyToOne(() => Category, (category) => category.product, {
    onDelete: 'CASCADE',
  })
  category: Category;

  @ApiProperty({ type: () => User })
  @ManyToMany(() => User, (user) => user.product)
  user: User[];
}
