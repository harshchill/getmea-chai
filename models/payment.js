import mongoose from "mongoose";
const { Schema, models } = mongoose;

const PaymentSchema = new Schema({
  name: { type: String, required: true },
  to_user: { type: String, required: true },
  oid: { type: String, required: true },
  message: { type: String },
  amount: { type: Number, required: true },
  done: { type: Boolean, default: false },
});

 export const User = mongoose.models.payment || mongoose.model('payment',PaymentSchema );
// export default mongoose.models.Payment || model("Payment", PaymentSchema);
