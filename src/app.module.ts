import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module'; // Adjust the import according to your file structure

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://termusred:WhyWouldI@cluster0.clshw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Your MongoDB URI
    UsersModule, // Import your UsersModule
  ],
})
export class AppModule {}
