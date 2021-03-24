import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/test'
export const dbConnect = () => {
  mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('db connected')
  })
}
