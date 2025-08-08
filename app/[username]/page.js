import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import { User } from "@/models/user";

const username = async ({ params = {} }) => {
  //if user is not present in db return a 4O4 not found error
  await connectDB();
  const user = await User.findOne({ username: params.username });
  if (!user) notFound();

  return <PaymentPage username={params.username} />;
};

export default username;
