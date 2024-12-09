import mongoose, { Document, Schema, Model,ObjectId } from 'mongoose';

export interface IUser extends Document {
 
  username: string;
  email: string;
  password?: string;
  role: 'SuperAdmin' | 'Admin' | 'Consulter' | 'Visiteur';
  image?: string; // URL or path to the image
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: {
    type: String,
    enum: ['SuperAdmin', 'Admin', 'Consulter', 'Visiteur'],
    default: 'Visiteur',
  },
  image: { type: String } // URL or path to the image
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
