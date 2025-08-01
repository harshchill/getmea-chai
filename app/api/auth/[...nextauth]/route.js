import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { User } from "@/models/user";
import payment from "@/models/payment";
import connectDB from "@/db/connectDb";

export const authoptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await connectDB();
        const currentUser = await user.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
          user.name = newUser.username;
        } else {
          user.name = currentUser.username;
        }
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    },
  },
});
export { authoptions as GET, authoptions as POST };
