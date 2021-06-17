import mongoose from 'mongoose';

const { Schema } = mongoose;

export const categoriesSchema = new Schema({
  
});

export const UserModel = mongoose.model(
  'Users',
  categoriesSchema,
  'users'
);