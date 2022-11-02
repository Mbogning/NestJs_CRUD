import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModel } from './user.module';
import { UserEntity } from './user';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest_test',
    entities: [UserEntity],
    synchronize: true,
  }), UserModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
