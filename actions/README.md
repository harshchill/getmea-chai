# ⚡ Actions

This directory contains **Next.js Server Actions** used throughout the Get Me a Chai application. All functions run exclusively on the server (marked with `"use server"`) and interact directly with the database and third-party services.

## 📄 Files

### `userActions.js`

Provides server-side functions for user management and payment processing.

| Function | Description |
|---|---|
| `initiate(amount, to_username, paymentform)` | Creates a Razorpay order and records a pending payment in the database |
| `fetchuser(username)` | Fetches a user document by username |
| `fetchuserbyEmail(email)` | Fetches a user document by email address |
| `fetchpayments(username)` | Returns the top 10 completed payments received by a creator, sorted by amount |
| `updateUser(data, oldusername)` | Updates a user's profile; cascades username changes to existing payment records |

## 🔗 Dependencies

- [`razorpay`](https://www.npmjs.com/package/razorpay) — Payment order creation
- `@/db/connectDb` — MongoDB connection helper
- `@/models/user` — User Mongoose model
- `@/models/payment` — Payment Mongoose model
