import { 
    Prop ,
    Schema,
    SchemaFactory
} from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class User {
  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
    maxlength: 20,
    minlength: 1,
    unique: true,
  })
  username: string;
  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  password: string;
  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User)