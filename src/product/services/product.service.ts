import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    if (!product)
      throw new HttpException('Produto não encontrado.', HttpStatus.NOT_FOUND);

    return product;
  }

  async findByTitle(title: string): Promise<Product[]> {
    return await this.productRepository.find({
      where: { title: ILike(`%${title}%`) },
    });
  }

  async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }

  async update(product: Product): Promise<Product> {
    const searchProduct: Product = await this.findById(product.id);

    if (!searchProduct || !product.id)
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);

    return await this.productRepository.save(product);
  }

  async delete(id: number): Promise<DeleteResult> {
    const searchProduct = await this.findById(id);

    if (!searchProduct)
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);

    return await this.productRepository.delete(id);
  }
}
