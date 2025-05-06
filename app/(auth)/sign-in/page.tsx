import { APP_NAME } from "@/lib/open-graph";
import type { Metadata } from "next";
import GradientBackground from "./_components/gradient-background";
import { SignInForm } from "./_components/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <GradientBackground />
      <div className="relative z-10 mx-auto grid size-full max-w-6xl grid-cols-1 overflow-hidden rounded-3xl bg-background lg:grid-cols-2">
        {/* Left Side - Gradient Background */}
        <div className="h-full p-2">
          <div className="relative flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-purple-900 via-fuchsia-600 to-blue-500 p-10 text-white">
            <div className="relative z-10">
              <p className="font-medium text-sm uppercase tracking-wider">Start from scratch</p>
            </div>

            <div className="relative z-10 space-y-4">
              <h2 className="font-bold font-serif text-5xl leading-tight">
                Get
                <br />
                Everything
                <br />
                You Want
              </h2>
              <p className="max-w-xs text-sm">
                You can get everything you want if you work hard, trust the process, and stick to the plan.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col p-10 lg:p-16">
          <div className="mb-12 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gray-200" />
              <span className="font-semibold text-lg">{APP_NAME}</span>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
            <h1 className="mb-3 text-center font-bold font-serif text-4xl">Welcome Back</h1>
            <p className="mb-8 text-center text-gray-600">Enter your username and password to access your account</p>

            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}
