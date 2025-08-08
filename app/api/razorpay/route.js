import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";
import connectDB from "@/db/connectDb";
import { User } from "@/models/user";

// this page is for validating the payment and updating the [done to true] (in DB)(have context of payment schema) after payment is completed
// after payment razorpay sends a callback req on this api , have to handle it
//most info will be in that req body

export const POST = async (req) =>{
    // connect to DB
    await connectDB();

    // get the body from req and form a object
    let body = await req.formData();
    body = Object.fromEntries(body)


    //find that payment which happened
    let p = await payment.findOne({ oid : body.razorpay_order_id });
    if (!p){
        return NextResponse.json({success : false , message : 'Order ID not found'})
    }

    // fetch creator to get per-user Razorpay secret
    const creator = await User.findOne({ username: p.to_user });
    if (!creator || !creator.razorpaysecret){
        return NextResponse.json({ success: false, message: "Creator Razorpay secret not configured" });
    }

    //verify payment using creator's secret
    const isValid = validatePaymentVerification(
        { order_id : body.razorpay_order_id , payment_id : body.razorpay_payment_id },
        body.razorpay_signature,
        creator.razorpaysecret
    );

    //if payment is verified
    if(isValid){
         await payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },{done : true} ,{new : true})
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${p.to_user}?paymentdone=true`);
    }
    else{
        return NextResponse.json({success: false, message:"Payment Verification Failed" })
    }


}
