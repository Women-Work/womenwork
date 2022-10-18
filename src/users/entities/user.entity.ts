import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";


@Entity({name: 'tb_users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 45, nullable: false})
    username: string

    @IsNotEmpty()
    @Column({length: 60, nullable: false, unique: true})
    email: string

    @IsNotEmpty()
    @Column({length: 16, nullable: false})
    password: string

    @IsNotEmpty()
    @Column({length: 255, nullable: true})
    photo: string
}


