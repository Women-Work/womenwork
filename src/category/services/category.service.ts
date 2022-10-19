import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations:{
        product:true
      }
    });
  }

  async findById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: {
        id,
      },
      relations:{
        product:true
      }
    });
    if (!category) {
      throw new HttpException(
        'Categoria não encontrada.',
        HttpStatus.NOT_FOUND,
      );
    }

    return category;
  }

  async findByName(name: string): Promise<Category[]> {
    return await this.categoryRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
      relations:{
        product:true
      }
    });
  }

  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }

  async update(category: Category): Promise<Category> {
    const searchCategory: Category = await this.findById(category.id);

    if (!searchCategory || category.id)
      throw new HttpException(
        'Categoria não encontrada.',
        HttpStatus.NOT_FOUND,
      );

    return await this.categoryRepository.save(category);
  }

  async delete(id: number): Promise<DeleteResult> {
    const searchCategory = await this.findById(id);

    if (!searchCategory)
      throw new HttpException(
        'Categoria não encontrada.',
        HttpStatus.NOT_FOUND,
      );

    return await this.categoryRepository.delete(id);
  }
}
