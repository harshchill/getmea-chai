"use server"
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import payment from "@/models/payment";
import { User } from "@/models/user";

export const initiate = async (amount, to_username, paymentform) => {

  // connect to the database
  await connectDB();
  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  var options = {
    amount: Number.parseInt(amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR"
  };


  //create an order in razorpay
  let x = await instance.orders.create(options)

  //a payment object which shows pending payment in the database
  await payment.create({
    oid : x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message : paymentform.message,
  })

  return x;
};

export const fetchuser = async (username) => {
  connectDB()
  const u = await User.findOne({username : username})
  console.log("user",u)
  let user =  u.toObject({flattenObjectIds : true}) 
  return user;
}

export const fetchpayments = async (username) => {
  connectDB();
   // find all payments sorted by decreasing order of amount and flatten object ids
  let p = await payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
  return p
}
