import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';

@Entity({ name: 'tb_users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  name: string;
 
  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 60, nullable: false, unique: true })
  user: string;

  @IsNotEmpty()
  @MinLength(8)
  @Column({ length: 255, nullable: false })
  password: string;

  @IsNotEmpty()
  @Column({ length: 400, nullable: true })
  photo: string;

  @OneToMany(() => Product, (product) => product.user)
  product: Product[];
}