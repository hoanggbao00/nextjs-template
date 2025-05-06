export interface UserInfo {
  id: string;
  name: string;
  email: string;
  code: string;
  avatar: string;
}

export interface SignInResponse {
  user: UserInfo;
  token: string;
  refresh_token: string;
}
