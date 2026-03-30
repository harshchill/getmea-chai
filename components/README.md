# 🧩 Components

This directory contains reusable **React components** shared across pages in the Get Me a Chai application.

## 📄 Files

| File | Description |
|---|---|
| `Navbar.js` | Top navigation bar — shows the brand logo, a session-aware user dropdown (Dashboard, Your Page, Sign Out), and a Log In button for unauthenticated visitors |
| `PaymentPage.js` | Creator public page UI — displays the cover image, profile picture, supporter list, and the payment form powered by Razorpay |
| `BlurText.js` | Animated text component that reveals text with a blur-in effect |
| `SpotlightCard.js` | Interactive card component with a spotlight/glow effect on hover |
| `SessionWrapper.js` | Thin wrapper around `next-auth`'s `SessionProvider` to make session state available to the client component tree |
| `Footer.js` | Site-wide footer component |

## Key Dependencies

- [`next-auth/react`](https://next-auth.js.org/) — `useSession`, `signIn`, `signOut`
- [`react-toastify`](https://fkhadra.github.io/react-toastify/) — Toast notifications in `PaymentPage`
- [`next/script`](https://nextjs.org/docs/app/api-reference/components/script) — Loads the Razorpay checkout script
- [`framer-motion`](https://www.framer.com/motion/) — Animations used in `BlurText` and `SpotlightCard`
