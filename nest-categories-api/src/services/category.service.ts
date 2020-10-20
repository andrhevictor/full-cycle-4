import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/models/category.model';
import { Repository } from 'typeorm';

export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
}
