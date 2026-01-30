import User from "@/models/Login-model";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import dbConnect from "./service/mongo";
export const {
  auth,
  signIn,
  signOut,
  handlers: { POST, GET },
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        await dbConnect();

        // ১. ডাটাবেজ থেকে ইউজার খোঁজা
        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;

        // ২. পাসওয়ার্ড চেক করা
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isMatch) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
