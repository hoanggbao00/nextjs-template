import { z } from "zod";

export const authSchema = z.object({
  username: z.string({ message: "Username is required" }),
  password: z.string({ message: "Password is required" }),
});

export type AuthSchema = z.infer<typeof authSchema>;
