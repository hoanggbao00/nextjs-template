import type { DefaultUser } from "next-auth";
import type { UserInfo } from "./sign-in.types";

declare module "next-auth" {
  /**
   * Leveraged by session callback's user object (AdapterUser extends User)
   */
  interface User extends DefaultUser, UserInfo {
    token: string;
    refresh_token: string;
    error?: string;
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      token: string;
      refresh_token: string;
      error?: string;
    };
  }
}
