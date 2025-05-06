import { signInAction } from "@/lib/auth.actions";
import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthConfig = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  providers: [
    Credentials({
      credentials: { username: {}, password: {} },
      authorize: async (credentials) => {
        const { username, password } = credentials;

        const data = await signInAction({ username: username as string, password: password as string });

        return {
          id: data.user.id.toString(),
          name: data.user.name,
          avatar: data.user.avatar,
          email: data.user.email,
          code: data.user.code,
          token: data.token,
          refresh_token: data.refreshToken,
        };
      },
    }),
  ],
  callbacks: {
    // async signIn({ user }) {
    //   if (user?.error) {
    //     console.error(user.error);
    //     return false;
    //   }

    //   return true;
    // },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.avatar = user.avatar;
        token.token = user.token;
        token.refresh_token = user.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.staffCode = token.staffCode as string;
        session.user.token = token.token as string;
        session.user.refresh_token = token.refresh_token as string;
      }
      return session;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
