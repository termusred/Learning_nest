import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable(
  
)
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  // Get all users
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: number): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }

  // Update a user
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true, // return the updated document
    }).exec();
  }

  // Remove a user
  async remove(id: number): Promise<User | null> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
