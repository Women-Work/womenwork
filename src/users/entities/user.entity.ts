import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';
import { RegExHelper } from 'src/helpers/regex.helper';
import { MessagesHelper } from 'src/helpers/messages.helpers';
import { hashSync } from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty() 
  id: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  @ApiProperty() 
  name: string;
 
  @IsNotEmpty()
  @IsEmail()
  @Column({ nullable: false, unique: true })
  @ApiProperty(({example: "email@email.com.br"})) 
  user: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID})
  @Column({ nullable: false })
  @ApiProperty() 
  password: string;

  @Column({ length: 5000, default: 'default.jpg' })
  @ApiProperty() 
  photo: string;

  @ApiProperty() 
  @OneToMany(() => Product, (product) => product.user)
  product: Product[];

}