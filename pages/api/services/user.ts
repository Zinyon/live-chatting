import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({name: String, email: String});
const User = mongoose.model('User', userSchema, 'user');

export const getUser = async (args: any, ctx: any) => {
    const users = await User.find({});
    return users;
}