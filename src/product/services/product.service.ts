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

  /**
   * @desc Search all products registered in the database
   * @return A promise to search for everything
   */
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({
      relations: {
        category: true,
        user: true,
      },
    });
  }

  /**
   * @desc Search product by id registered in the database
   * @returns A promise to search for a product id
   * @Param id that will be searched in the database
   * @throw HttpException in case the id is not found in the database.
   */
  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
      relations: {
        category: true,
        user: true,
      },
    });

    if (!product)
      throw new HttpException('Produto não encontrado.', HttpStatus.NOT_FOUND);

    return product;
  }


/**
 * @desc Search product by title registered in the database
 * @param title that will be searched in the database
 * @returns A promise to search for a product title
 */
  async findByTitle(title: string): Promise<Product[]> {
    return await this.productRepository.find({
      where: { title: ILike(`%${title}%`) },
      relations: {
        category: true,
        user: true,
      },
    });
  }

  /**
   * @desc add new product to database
   * @Body where the order should be placed
   * @returns a promise that the product was registered in the database
   */
  async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }

  /**
   * @desc updates a product that is registered in the database through the ID
   * @Body where the order should be placed
   * @returns a promise that the product has been updated in the database
   */
  async update(product: Product): Promise<Product> {
    const searchProduct: Product = await this.findById(product.id);

    if (!searchProduct || !product.id)
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);

    return await this.productRepository.save(product);
  }

  /**
   * @desc remove a product by id from the database
   * @param id parameter to remove the product from the database
   * @returns a promise that the product has been removed from the database
   * @throw HttpException in case the id is not found in the database
   */
  async delete(id: number): Promise<DeleteResult> {
    const searchProduct = await this.findById(id);

    if (!searchProduct)
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);

    return await this.productRepository.delete(id);
  }
}
