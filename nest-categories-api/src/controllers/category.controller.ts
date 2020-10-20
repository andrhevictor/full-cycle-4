import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/models/category.model';
import { CategoryDto } from 'src/dto/category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  @Get()
  async getCategories(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Post()
  async store(
    @Body(new ValidationPipe()) categoryDto: CategoryDto,
  ): Promise<Category> {
    const category = this.categoryRepo.create(categoryDto);
    return this.categoryRepo.save(category);
  }
}
