import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import { User } from "@/models/user";

const username = async ({ params = {} }) => {
  try {
    // Only connect to DB if not in build time
    if (process.env.NODE_ENV !== 'production' || process.env.MONGODB_URI) {
      await connectDB();
      const user = await User.findOne({ username: params.username });
      if (!user) notFound();
    }
  } catch (error) {
    console.error('Error connecting to database:', error);
    // During build, don't fail - just continue
    if (process.env.NODE_ENV === 'production' && !process.env.MONGODB_URI) {
      console.warn('MongoDB URI not found, skipping database check during build');
    }
  }

  return <PaymentPage username={params.username} />;
};

export default username;
