# 📱 App (Next.js App Router)

This directory follows the **Next.js App Router** convention. Each sub-folder maps to a URL route, and special files (`page.js`, `layout.js`, `route.js`) define the rendered output or API behaviour.

## 📁 Route Structure

```
app/
├── layout.js              # Root layout — wraps all pages with SessionWrapper, Navbar, and global styles
├── page.js                # Home page (/)
├── globals.css            # Global CSS / Tailwind base styles
├── icon.png               # App favicon / icon
├── [username]/
│   └── page.js            # Dynamic creator profile page (/:username)
├── about/                 # About page (/about)
├── dashboard/             # Creator dashboard (/dashboard) — profile editing
├── explore/               # Explore creators page (/explore)
├── login/                 # Login page (/login) — GitHub OAuth entry point
└── api/
    ├── auth/
    │   └── [...nextauth]/ # NextAuth.js catch-all handler (/api/auth/*)
    └── razorpay/
        └── route.js       # POST handler for Razorpay webhook / payment verification (/api/razorpay)
```

## 🔑 Key Routes

| Route | File | Description |
|---|---|---|
| `/` | `page.js` | Landing / home page |
| `/:username` | `[username]/page.js` | Public creator page with payment form |
| `/about` | `about/page.js` | About the platform |
| `/dashboard` | `dashboard/page.js` | Authenticated creator settings |
| `/explore` | `explore/page.js` | Browse creators |
| `/login` | `login/page.js` | GitHub OAuth login |
| `/api/auth/*` | NextAuth handler | Session management (sign in / out / callbacks) |
| `/api/razorpay` | `razorpay/route.js` | Server-side Razorpay payment verification |

## 🌐 Environment Variables Used

| Variable | Purpose |
|---|---|
| `NEXTAUTH_SECRET` | Secret used to sign NextAuth session tokens |
| `NEXTAUTH_URL` | Canonical URL of the app (e.g. `http://localhost:3000`) |
| `GITHUB_ID` | GitHub OAuth App client ID |
| `GITHUB_SECRET` | GitHub OAuth App client secret |
| `KEY_SECRET` | Razorpay secret key used for payment signature verification |
