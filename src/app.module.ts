import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/user.module';
import { Product } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';
import { Category } from './category/entities/category.entity';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_womenwork',
      entities: [User, Product, Category],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    CategoryModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
