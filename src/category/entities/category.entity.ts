import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name :"tb_categories"})
export class Category{

@PrimaryGeneratedColumn()
id: number;

@IsNotEmpty()
@Column({length: 20, nullable: false})
name: string

@IsNotEmpty()
@Column({length: 45, nullable: false})
icon: string
   

}