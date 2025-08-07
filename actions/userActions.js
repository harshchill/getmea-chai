"use server";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import payment from "@/models/payment";
import { User } from "@/models/user";

export const initiate = async (amount, to_username, paymentform) => {
  // connect to the database
  await connectDB();
  // Fetch the user who will receive the payment
  const toUser = await User.findOne({ username: to_username });
  if (!toUser) {
    throw new Error("Recipient user not found");
  }

  // Use the user's Razorpay credentials
  var instance = new Razorpay({
    key_id: toUser.razorpayid,
    key_secret: toUser.razorpaysecret,
  });

  var options = {
    amount: Number.parseInt(amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
  };

  //create an order in razorpay
  let x = await instance.orders.create(options);

  //a payment object which shows pending payment in the database
  await payment.create({
    oid: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchuser = async (username) => {
  await connectDB();
  const u = await User.findOne({ username: username });
  if (u) {
    let user = u.toObject({ flattenObjectIds: true });
    return user;
  } else {
    console.log("user not found");
  }
};

//fetching via email cause email remains constant || primary key
export const fetchuserbyEmail = async (email) => {
  await connectDB();
  const u = await User.findOne({ email: email });
  if (u) {
    let user = u.toObject({ flattenObjectIds: true });
    return user;
  } else {
    console.log("user not found");
  }
};


export const fetchpayments = async (username) => {
  await connectDB();
  // find all payments sorted by decreasing order of amount and flatten object ids
  let p = await payment
    .find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(10)
    .lean();

    //id are not plain text 
    // Convert _id and any other ObjectId fields to string
  p = p.map(pay => ({
    ...pay,
    _id: pay._id.toString(),
    // add more fields if needed
  }));

  return p;
};

//update the user details
export const updateUser = async (data, oldusername) => {
  await connectDB();
  let ndata = data
  //if username is updated , check if it is available or not
  if (oldusername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      throw new Error("Username already exists");
    }
  }
  await User.updateOne({ email: ndata.email }, ndata);
};
