# 🗃️ Models

This directory contains **Mongoose ODM schemas** that define the data structure stored in the `Chai-addicts` MongoDB database.

## 📄 Files

### `user.js`

Defines the **User** model, representing a creator on the platform.

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | String | ✅ | User's email address (primary key for lookups) |
| `name` | String | | Display name |
| `username` | String | ✅ | Unique handle used in profile URLs (`/username`) |
| `profilepic` | String | | URL to the profile picture |
| `coverpic` | String | | URL to the cover/banner image |
| `razorpayid` | String | | Creator's Razorpay Key ID |
| `razorpaysecret` | String | | Creator's Razorpay Key Secret |

**Exports:** `User` (named export)

---

### `payment.js`

Defines the **Payment** model, representing a single payment transaction.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | String | ✅ | Supporter's name |
| `to_user` | String | ✅ | Creator's username receiving the payment |
| `oid` | String | ✅ | Razorpay order ID |
| `message` | String | | Optional message from the supporter |
| `amount` | Number | ✅ | Amount in paise (INR subunit) |
| `done` | Boolean | | `true` once the payment is verified; defaults to `false` |

**Exports:** default export (the `payment` model)
