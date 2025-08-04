"use server";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import payment from "@/models/payment";
import User from "@/models/user";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  var options = {
    amount: Number.parseInt(amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR"
  };

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
