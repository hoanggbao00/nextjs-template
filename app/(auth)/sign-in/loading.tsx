import { IconLoader2 } from "@tabler/icons-react";

export default function SignInPageLoading() {
  return (
    <div className="flex h-screen items-center justify-center bg-foreground">
      <div className="grid size-full grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-2">
        {/* Left Side - Gradient Background */}
        <div className="h-full animate-pulse p-2">
          <div className="h-full rounded-3xl bg-gradient-to-br from-purple-900 via-fuchsia-600 to-blue-500" />
        </div>

        {/* Right Side - Login Form */}
        <div className="grid h-full place-items-center bg-muted p-2">
          <IconLoader2 className="size-12 animate-spin" />
        </div>
      </div>
    </div>
  );
}
