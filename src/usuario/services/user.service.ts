import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { User } from "../entities/user.entity";


@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findById(id: number): Promise<User> {
        let user = await this.userRepository.findOne({
            where: {
                id
            }
        });

        if (!user)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
        return user;
    }

    async create(users: User): Promise<User> {
        return await this.userRepository.save(users);
    }

    async update(users: User): Promise<User> {

        let userService: User = await this.findById(users.id);

        if (!userService || !users.id)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
        return await this.userRepository.save(users);
        
    }

    async findByEmail(email: string): Promise<User[]> {
        return await this.userRepository.find({
            where:{
                email: ILike(`%${email}%`)
            }
        });
    }

    async delete(id: number): Promise<DeleteResult> {
        
        let buscaUser = await this.findById(id)

        if(!buscaUser)
            throw new HttpException ('Usuário não encontrado!', HttpStatus.NOT_FOUND);
        return await this.userRepository.delete(id);
    }
}