"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-items/input-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader2, IconLock, IconUser } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { useRouter } from "nextjs-toploader/app";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { AuthSchema } from "./schema";
import { authSchema } from "./schema";

export const SignInForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    mode: "onSubmit",
  });

  const handleSubmit = async (values: AuthSchema) => {
    const { username, password } = values;
    setIsSubmitting(true);

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      router.push("/");
    } catch (e: unknown) {
      const error = e as Error;
      console.error(error);
      toast.error("Username or password is incorrect");
      form.clearErrors();
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80">
          <IconLoader2 className="size-10 animate-spin" />
        </div>
      )}
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField
            label="Username"
            control={form.control}
            name="username"
            placeholder="admin"
            startIcon={IconUser}
            disabled={isSubmitting}
            required
          />

          <InputField
            label="Password"
            control={form.control}
            name="password"
            type="password"
            placeholder="admin"
            startIcon={IconLock}
            disabled={isSubmitting}
            required
          />

          <Button className="w-full" loading={isSubmitting}>
            Sign In
          </Button>
        </form>
      </Form>
    </>
  );
};
