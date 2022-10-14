import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './usuario/entities/user.entity';
import { UserOrmModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_womenwork',
      entities: [User],
      synchronize: true
    }),
    UserOrmModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
