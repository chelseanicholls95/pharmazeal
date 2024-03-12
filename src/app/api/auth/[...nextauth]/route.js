import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Staff from "@/models/Staff";
import dbConnect from "@/lib/dbConnect";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "username" },
        password: { label: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        try {
          const user = await Staff.findOne({ username: credentials.username });

          if (user) {
            const isPasswordCorrect = credentials.password == user.password;
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
