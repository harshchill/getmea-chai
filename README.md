# ☕ Get Me a Chai

> A modern, lightweight crowdfunding platform where fans fuel creators—one cup of chai at a time.

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.17.0-green)](https://www.mongodb.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-2.9.6-purple)](https://razorpay.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue)](https://tailwindcss.com/)

## ✨ Overview

Get Me a Chai is a delightful crowdfunding platform that connects creators with their supporters through the simple act of buying them a chai (tea). Built with modern web technologies, it offers a seamless experience for both creators and supporters.

### 🌟 Key Features

- **🎨 Beautiful UI/UX** - Modern, responsive design with smooth animations
- **🔐 Secure Authentication** - GitHub OAuth integration with NextAuth.js
- **💳 Integrated Payments** - Seamless Razorpay payment processing
- **📱 Mobile Responsive** - Works perfectly on all devices
- **⚡ Fast Performance** - Built with Next.js 15 and optimized for speed
- **🎭 Custom Animations** - Framer Motion powered smooth interactions
- **🛡️ Payment Verification** - Server-side payment validation for security

## 🚀 Features

### For Creators
- **Simple Setup** - Create your page in minutes with username and profile
- **Customizable Profile** - Add profile picture, cover image, and bio
- **Payment Integration** - Connect your Razorpay account for instant payments
- **Analytics Dashboard** - Track your supporters and payments
- **Shareable Links** - Easy-to-share URLs for your supporters

### For Supporters
- **No Registration Required** - Support creators without creating an account
- **Quick Payments** - One-click payment process with Razorpay
- **Personal Messages** - Leave heartfelt messages with your support
- **Secure Transactions** - Encrypted payments with server verification
- **Instant Notifications** - Real-time payment confirmations

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **React Toastify** - Beautiful toast notifications

### Backend & Database
- **NextAuth.js** - Authentication solution
- **MongoDB** - NoSQL database with Mongoose ODM
- **Razorpay** - Payment gateway integration

### 3D & Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **OGL** - WebGL library for graphics

## 📁 Project Structure

```
getmea-chai/
├── app/                    # Next.js App Router
│   ├── [username]/        # Dynamic creator pages
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth configuration
│   │   └── razorpay/      # Payment verification
│   ├── about/             # About page
│   ├── dashboard/         # Creator dashboard
│   ├── explore/           # Explore creators
│   └── login/             # Authentication page
├── components/            # Reusable React components
│   ├── BlurText.js       # Animated text component
│   ├── SpotlightCard.js  # Interactive cards
│   ├── PaymentPage.js    # Payment interface
│   └── Navbar.js         # Navigation component
├── models/               # MongoDB schemas
│   ├── user.js          # User model
│   └── payment.js       # Payment model
├── actions/              # Server actions
│   └── userActions.js   # User-related functions
└── db/                  # Database connection
    └── connectDb.js     # MongoDB connection
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- Razorpay account
- GitHub OAuth app

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/getmea-chai.git
   cd getmea-chai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   GITHUB_ID=your_github_oauth_client_id
   GITHUB_SECRET=your_github_oauth_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_URL=http://localhost:3000
   KEY_SECRET=your_razorpay_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB database
2. Add your connection string to `.env.local`
3. The app will automatically create collections

### Razorpay Integration
1. Sign up for a Razorpay account
2. Get your API keys from the dashboard
3. Configure webhook URL: `https://yourdomain.com/api/razorpay`

### GitHub OAuth
1. Create a new OAuth app on GitHub
2. Set callback URL: `http://localhost:3000/api/auth/callback/github`
3. Add client ID and secret to environment variables

## 📱 Usage

### For Creators
1. **Sign up** - Use GitHub OAuth to create your account
2. **Set up profile** - Add username, profile picture, and cover image
3. **Connect Razorpay** - Add your Razorpay credentials
4. **Share your link** - Your page will be available at `/yourusername`

### For Supporters
1. **Visit creator page** - Go to `yourdomain.com/creatorname`
2. **Fill payment form** - Enter your name, amount, and message
3. **Complete payment** - Use Razorpay to make secure payment
4. **Get confirmation** - Receive instant payment confirmation

## 🎨 Design Features

- **Dark Theme** - Modern dark interface with accent colors
- **Spotlight Cards** - Interactive cards with hover effects
- **Blur Text Animation** - Smooth text reveal animations
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Loading States** - Smooth loading animations
- **Toast Notifications** - Beautiful success/error messages

## 🔒 Security Features

- **Server-side Payment Verification** - All payments verified on server
- **Encrypted Data** - Sensitive data encrypted in database
- **OAuth Authentication** - Secure GitHub-based login
- **Input Validation** - All user inputs validated
- **CSRF Protection** - Built-in Next.js security features

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify** - Compatible with Next.js
- **Railway** - Easy deployment with database
- **DigitalOcean** - Custom server deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment
- **Razorpay** - For payment processing
- **Tailwind CSS** - For the beautiful styling system
- **Framer Motion** - For smooth animations

## 📞 Support

- **Issues** - Report bugs on GitHub Issues
- **Discussions** - Ask questions on GitHub Discussions
- **Email** - Contact at support@getmeachai.com

---

<div align="center">
  <p>Made with ☕ and ❤️ by the Get Me a Chai team</p>
  <p>Support creators, one chai at a time!</p>
</div>
