import * as mongoose from 'mongoose';

export const FoodSchema = new mongoose.Schema({
  id: String,
  name: String,
  baseAmount: Number,
  caffeine: Number,
  imageUrl: String,
});
