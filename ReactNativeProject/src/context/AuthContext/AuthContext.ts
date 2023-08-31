import { createContext, useContext } from 'react';

export type UserData = {
  userName?: string;
  email: string;
  userPassword: string;
  passwordConfirmation?: string;
};

type AuthContextType = {
  signIn: (data: UserData) => Promise<void>;
  signOut: () => void;
  signUp: (data: Required<UserData>) => Promise<void>;
  isSignedIn: boolean;
  userToken: string;
};

const AuthContext = createContext<AuthContextType>({
  signIn: async () => {},
  signOut: () => {},
  signUp: async () => {},
  isSignedIn: false,
  userToken: '',
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
