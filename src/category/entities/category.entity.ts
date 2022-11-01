import { IsNotEmpty } from 'class-validator';
import { Product } from '../../product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_categories' })
export class Category {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 20, nullable: false })
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  @ApiProperty()
  icon: string;

  @ApiProperty()
  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
