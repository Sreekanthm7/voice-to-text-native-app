import {atom} from 'recoil';

export type AuthState = {
  user: {
    email: string;
    password: string;
  };
  access_token: string;
};

export const authState = atom<AuthState | null>({
  key: 'audioToText/auth',
  default: null,
});
