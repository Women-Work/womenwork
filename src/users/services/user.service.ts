import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bcrypt } from 'src/auth/bcrypt/bcrypt';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private bcrypt: Bcrypt
  ) {}

  async findByUser(user: string): Promise<User>{
    return await this.userRepository.findOne({
      where: {
        user: user
      }
    })
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations:{
        product: true
      }
    });

    if (!user)
      throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

    return user;
  }

  async create(user: User): Promise<User> {
    
    let userSearch = await this.findByUser(user.user);

    if (!userSearch) {
      user.password = await this.bcrypt.hashPassword(user.password)
      return await this.userRepository.save(user)
    }

    throw new HttpException('O usuário já existe!', HttpStatus.BAD_REQUEST)
  }

  async update(user: User): Promise<User> {

    let userUpdate: User = await this.findById(user.id);
    let userSearch = await this.findByUser(user.user);

    if(!userUpdate)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    if(userSearch && userSearch.id != user.id)
      throw new HttpException('Usuário já existe no sistema!', HttpStatus.BAD_REQUEST);

      user.password = await this.bcrypt.hashPassword(user.password)
      return await this.userRepository.save(user)
  }
}
