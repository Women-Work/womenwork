import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
