import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Product } from "../entities/product.entity";
import { ProductService } from "../services/product.service";


@Controller("/products")
export class ProductController{
    constructor(private readonly productService: ProductService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Product[]>{
        return this.productService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Product>{
        return this.productService.findById(id);
    }

    @Get('/title/:title')
    @HttpCode(HttpStatus.OK)
    findByTitle(@Param('title') title: string): Promise<Product[]> {
        return this.productService.findByTitle(title);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() produto: Product
    ): Promise<Product>{
        return this.productService.create(produto);
    }
    
}