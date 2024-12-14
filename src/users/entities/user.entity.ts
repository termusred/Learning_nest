import { Prop , Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";



@Schema({
    versionKey: false
})

export class User {
    @Prop(
        {
            type : mongoose.SchemaTypes.String ,
            required : true
        }
        
    )
    fullname : string
    @Prop(
        {
            type : mongoose.SchemaTypes.String,
            required : true
        }
    )
    username : string
    @Prop(
        {
            type : mongoose.SchemaTypes.String,
            required : true
        }
    )
    password : string
}


export const UserSchema = SchemaFactory.createForClass(User)