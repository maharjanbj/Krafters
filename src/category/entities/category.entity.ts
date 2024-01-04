import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})

export class Category extends Document {
  @Prop()
  label: string;

  @Prop()
  image: string;
}

export type CategoryType = Category & Document;
export const CategorySchema = SchemaFactory.createForClass(Category);
