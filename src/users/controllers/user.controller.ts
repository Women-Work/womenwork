import { Delete, Param, ParseIntPipe } from '@nestjs/common';
import { Body,Controller,Get,HttpCode,Post,Put } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put('/update')
  @HttpCode(HttpStatus.OK)
  update(@Body() user: User): Promise<User> {
    return this.userService.update(user);
  }
}
