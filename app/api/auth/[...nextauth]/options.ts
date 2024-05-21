import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
interface CredentialsProps {
  email: string;
  password: string;
}
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      // @ts-ignore
      async authorize(credentials: CredentialsProps) {
        const user = {
          id: "1",
          name: "mhmd",
          email: "mhmd@gmail.com",
          password: "mhmd2024",
        };

        if (
          credentials.email === user.email &&
          credentials.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    // @ts-ignore
    jwt: true,
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
