import { Controller, ParseIntPipe } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

import { Category } from '../entities/category.entity';
import { CategoryService } from '../services/category.service';

@ApiTags('Category')
@Controller('/categories')
@ApiBearerAuth()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoryService.findById(id);
  }

  @Get('/name/:name')
  @HttpCode(HttpStatus.OK)
  findByName(@Param('name') name: string): Promise<Category[]> {
    return this.categoryService.findByName(name);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  create(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  update(@Body() category: Category): Promise<Category> {
    return this.categoryService.update(category);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtAuthGuard)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.delete(id);
  }
}
