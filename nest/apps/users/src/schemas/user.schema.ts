import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  collection: 'users',
  versionKey: false,
  timestamps: true,
  toJSON: {
    transform: (_doc, ret) => {
      delete ret.password;
      return ret;
    },
  },
})
export class User {
  _id: Types.ObjectId;

  @Prop({ unique: true })
  email?: string;

  @Prop()
  password: string;

  @Prop({ required: true, default: false })
  isAdmin: boolean;

  @Prop({ default: '' })
  name: string;

  @Prop({ default: '' })
  image: string;

  @Prop({ default: '' })
  address: string;

  @Prop()
  age?: number;

  createdAt: string;
  updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
