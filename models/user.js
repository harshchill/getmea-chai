import mongoose from 'mongoose';
const { Schema, models } = mongoose;

const userSchema = new Schema({
  email: {type : String , required : true}, 
  name: {type : String }, 
  username: {type : String , required : true}, 
  profilepic: {type : String }, 
  coverpic : String,
  razorpayid : String,
  razorpaysecret : String
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
