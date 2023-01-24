import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bcrypt } from '../auth/bcrypt/bcrypt';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ProductModule],
  providers: [UserService, Bcrypt],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
