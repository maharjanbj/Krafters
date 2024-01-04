import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryType } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly CategoryModel: Model<CategoryType>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.CategoryModel.create({...createCategoryDto});
  }

  findAll() {
    return this.CategoryModel.find({});
  }

  findOne(id: string) {
    return this.CategoryModel.findById(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.CategoryModel.findByIdAndUpdate(id, {
      ...UpdateCategoryDto,
    });
  }

  remove(id: string) {
    return this.CategoryModel.findOne({_id:id});
  }
}
