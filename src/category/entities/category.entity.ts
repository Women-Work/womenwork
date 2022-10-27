import { IsNotEmpty } from 'class-validator';
import { Product } from '../../product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 20, nullable: false })
  name: string;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  icon: string;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
