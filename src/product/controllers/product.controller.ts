import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('Product')
@Controller('/products')
@ApiBearerAuth()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  @Get('/title/:title')
  @HttpCode(HttpStatus.OK)
  findByTitle(@Param('title') title: string): Promise<Product[]> {
    return this.productService.findByTitle(title);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  update(@Body() product: Product): Promise<Product> {
    return this.productService.update(product);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtAuthGuard)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
