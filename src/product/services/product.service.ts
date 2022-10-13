import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Product } from "../entities/product.entity";


@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) { }

    async findAll(): Promise<Product[]>{
        return await this.productRepository.find();
    }

    async findById(id: number): Promise<Product>{
        let product = await this.productRepository.findOne({
            where: {
                id
            }
        }); 

        if(!product){
            throw new HttpException('Produto não encontrado.', HttpStatus.NOT_FOUND);
        }

        return product;
    }

    async findByTitle(title: string): Promise<Product[]> {
        return await this.productRepository.find({
            where:{
                title: ILike(`%${title}%`)
            }
        });
    }

    async create(product: Product): Promise<Product>{
        return await this.productRepository.save(product);
    }
}

