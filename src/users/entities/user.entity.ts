import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { Product } from '../../product/entities/product.entity';
import { RegExHelper } from '../../helpers/regex.helper';
import { MessagesHelper } from '../../helpers/messages.helpers';
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
  @ApiProperty({ example: 'email@email.com.br' })
  user: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
  @Column({ nullable: false })
  @ApiProperty()
  password: string;

  @Column({ length: 5000, default: 'default.jpg' })
  @ApiProperty()
  photo: string;

  @ApiProperty()
  @ManyToMany(() => Product, (product) => product.user)
  @JoinTable()
  product: Product[];
}
