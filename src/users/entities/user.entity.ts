import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';
import { RegExHelper } from 'src/helpers/regex.helper';
import { MessagesHelper } from 'src/helpers/messages.helpers';
import { hashSync } from 'bcrypt';

@Entity({ name: 'tb_users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  name: string;
 
  @IsNotEmpty()
  @IsEmail()
  @Column({ nullable: false, unique: true })
  user: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID})
  @Column({ nullable: false })
  password: string;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: true })
  photo: string;

  @OneToMany(() => Product, (product) => product.user)
  product: Product[];

}