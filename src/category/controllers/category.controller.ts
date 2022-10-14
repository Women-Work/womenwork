import { Controller, ParseIntPipe } from "@nestjs/common";
import { Body, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { Product } from "src/product/entities/product.entity";
import { Category } from "../entities/category.entity";
import { CategoryService } from "../services/category.service";

@Controller('/categories')
export class CategoryController{
constructor(private readonly categoryService: CategoryService){}


@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<Category[]>{
    return this.categoryService.findAll();

}

@Get('/:id')
@HttpCode(HttpStatus.OK)
findByTitle(@Param('name')name:string):Promise<Category[]> {
return this.categoryService.findByName(name)   
}

@Post()
@HttpCode(HttpStatus.CREATED)
create(
    @Body() category : Product
): Promise<Category>{
    return this.categoryService.create(category);
}

@Put()
@HttpCode(HttpStatus.OK)
update(@Body() category: Category): Promise<Category>{
    return this.categoryService.update(category);

}
@Delete()
@HttpCode(HttpStatus.OK)
delete(@Param('id',ParseIntPipe) id: number){
    return this.categoryService.delete(id)
}

}



