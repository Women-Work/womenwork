import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from '../../product/entities/product.entity';

@Entity({ name: 'tb_categories' })
export class Category {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  @ApiProperty()
  icon: string;

  @ApiProperty()
  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
