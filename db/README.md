# 🗄️ Database

This directory handles the MongoDB connection for the Get Me a Chai application.

## 📄 Files

### `connectDb.js`

Exports a single `connectDB` async function that establishes (or reuses) a Mongoose connection to the MongoDB instance.

- **Database name:** `Chai-addicts`
- **Connection string:** read from the `MONGODB_URI` environment variable
- Errors are caught and logged without crashing the server; in production an additional warning is emitted

## Usage

```js
import connectDB from "@/db/connectDb";

await connectDB();
// safe to query models after this call
```

## Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | Full MongoDB connection string (e.g. `mongodb+srv://...`) |
