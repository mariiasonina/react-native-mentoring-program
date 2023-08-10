import { createContext, useContext } from 'react';

export type AuthData = {
  userName: string;
  userPassword: string;
};

type AuthContextType = {
  signIn: (data: AuthData) => Promise<void>;
  signOut: () => void;
  signUp: (data: AuthData) => Promise<void>;
  isSignedIn: boolean;
};

const AuthContext = createContext<AuthContextType>({
  signIn: async () => {},
  signOut: () => {},
  signUp: async () => {},
  isSignedIn: false,
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
