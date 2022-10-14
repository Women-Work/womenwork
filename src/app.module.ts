import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './usuario/entities/user.entity';
import { UserOrmModule } from './usuario/usuario.module';
import { Product } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';
import { Category } from './category/entities/category.entity';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_womenwork',
      entities: [User, Product, Category],
      synchronize: true
    }),
    UserOrmModule,
    ProductModule,
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
