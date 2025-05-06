import type { AuthSchema } from "@/app/(auth)/sign-in/_components/schema";

// const SIGN_IN_ENDPOINT = `${API_ENDPOINT}/system-users/sign-in`;

export const signInAction = async (values: AuthSchema) => {
  const { username, password } = values;

  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  if (username !== "admin" || password !== "admin") {
    throw new Error("Invalid username or password");
  }

  // TODO: Add your API endpoint here
  // const res = await fetch(SIGN_IN_ENDPOINT, {
  //   method: "POST",
  //   body: JSON.stringify({ username, password }),
  // });

  // const data: SignInResponse = await res.json();

  // if (res.status !== 200) {
  //   throw new Error("Invalid username or password");
  // }

  return {
    user: {
      id: 12,
      name: "John Doe",
      email: "john.doe@example.com",
      code: "123456",
      avatar: "https://example.com/avatar.png",
    },
    token: "123456",
    refreshToken: "123456",
  };
};
