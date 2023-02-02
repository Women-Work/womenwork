import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { Product } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '14253500',
      database: 'db_womenwork',
      entities: [User, Product, Category],
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: process.env.DATABASE_URL,
    //   logging: false,
    //   dropSchema: false,
    //   ssl:{
    //     rejectUnauthorized: false
    //   },
    //     synchronize: true,
    //     autoLoadEntities: true,
    // }),
    UserModule,
    ProductModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
