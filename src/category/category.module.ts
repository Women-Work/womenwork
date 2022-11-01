import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryController } from './controllers/category.controller';
import { Category } from './entities/category.entity';
import { CategoryService } from './services/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [TypeOrmModule],
})
export class CategoryModule {}
