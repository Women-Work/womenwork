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

  /**
   * @desc search for all categories registered in the database
   * @returns the promise to see all categories
   */
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations: {
        product: true,
      },
    });
  }

  /**
   * @desc search for category by ID
   * @param id that will be searched in the database
   * @returns a promise to search for the category id
   * @throw HttpException in case the id is not found in the database
   */
  async findById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: {
        id,
      },
      relations: {
        product: true,
      },
    });
    if (!category) {
      throw new HttpException(
        'Categoria não encontrada.',
        HttpStatus.NOT_FOUND,
      );
    }

    return category;
  }

  /**
   * @desc search category by name registered in the database
   * @param name that will be searched in the database
   * @returns a promise to search for a category name
   */

  async findByName(name: string): Promise<Category[]> {
    return await this.categoryRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
      relations: {
        product: true,
      },
    });
  }

  /**
   * @desc add new category to database
   * @Body where the order should be placed
   * @returns a promise that the product was registered in the database
   */
  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }

  /**
   * @desc updates a category that is registered in the database through the ID
   * @Body where the order should be placed
   * @returns a promise that the category has been updated in the database
   */
  async update(category: Category): Promise<Category> {
    const searchCategory: Category = await this.findById(category.id);

    if (!searchCategory || !category.id)
      throw new HttpException(
        'Categoria não encontrada.',
        HttpStatus.NOT_FOUND,
      );

    return await this.categoryRepository.save(category);
  }

  /**
   * @desc HttpException in case the id is not found in the databaseremove a category by id from the database
   * @param id parameter to remove the category from the database
   * @throw HttpException in case the id is not found in the database
   * @returns a promise that the  has been removed from the database
   */
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
