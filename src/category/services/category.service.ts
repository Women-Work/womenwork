import { Injectable } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException, HttpVersionNotSupportedException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";;
import { Product } from "src/product/entities/product.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Category } from "../entities/category.entity";

@Injectable()
export class CategoryService{
    create(_category: Product): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    findByName(_name: string): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }
productRepository: any;
    finByName: Promise<Category[]>;
constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category> 
){ }

async findAll(): Promise<Category[]>{
    return await this.categoryRepository.find();
}

async findById(id: number): Promise<Category>{
let category = await this.categoryRepository.findOne({
    where : {
        id
    }
        
})
 if(!category){
    throw new HttpException('Categoria não encontrada.', HttpStatus.NOT_FOUND);
 }

 return category;
}

async findByTitle(name: string): Promise<Product[]> {
    return await this.productRepository.find({
        where:{
            title: ILike(`%${name}%`)
        }
    });
}

async update(category: Category): Promise<Category>{
    let searchCategory: Category = await this.findById(category.id);

    if(!searchCategory || category.id)
    throw new HttpException('Categoria nao encontrada', HttpStatus.NOT_FOUND);

    return await this.categoryRepository.save(category);

} 

async delete(id: number): Promise<DeleteResult>{
    let searchCategory = await this.findById(id);

    if(!searchCategory)
    throw new HttpException('Categoria nao encontrada', HttpStatus.NOT_FOUND)
    return await this.categoryRepository.delete(id)


}











}

