import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bcrypt } from 'src/auth/bcrypt/bcrypt';
import { MessagesHelper } from 'src/helpers/messages.helpers';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private bcrypt: Bcrypt,
  ) {}

  async findByUser(user: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        user,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        product: true,
      },
    });

    if (!user)
      throw new HttpException(
        MessagesHelper.USER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );

    return user;
  }

  async create(data: User): Promise<User> {
    const userSearch = await this.findByUser(data.user);

    if (!userSearch) {
      data.password = await this.bcrypt.hashPassword(data.password);
      const user = this.userRepository.create(data);
      return await this.userRepository.save(user);
    }

    throw new HttpException(
      MessagesHelper.EXISTING_USER,
      HttpStatus.BAD_REQUEST,
    );
  }

  async update(user: User): Promise<User> {
    const userUpdate: User = await this.findById(user.id);
    const userSearch = await this.findByUser(user.user);

    if (!userUpdate)
      throw new HttpException(
        MessagesHelper.USER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );

    if (userSearch && userSearch.id != user.id)
      throw new HttpException(
        MessagesHelper.EXISTING_USER,
        HttpStatus.BAD_REQUEST,
      );

    user.password = await this.bcrypt.hashPassword(user.password);
    this.userRepository.merge(userUpdate, user);
    return await this.userRepository.save(userUpdate);
  }
}
