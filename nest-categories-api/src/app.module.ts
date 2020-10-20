import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Category } from './models/category.model';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './sqlite/db.sql',
      entities: [Category],
      migrations: ['dist/**/*.entity.js'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService, CategoryService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
