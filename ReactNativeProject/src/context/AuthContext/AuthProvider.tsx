import React, { PropsWithChildren, Reducer, useMemo, useReducer } from 'react';
import { getToken } from '@src/api/api';
import AuthContext, { AuthData } from './AuthContext';

type StateProps = {
  isSignIn: boolean;
  userToken: string | null;
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer<Reducer<StateProps, any>>(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignIn: true,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignIn: false,
            userToken: null,
          };
        default:
          return { ...prevState };
      }
    },
    {
      isSignIn: false,
      userToken: null,
    },
  );

  const authContext = useMemo(
    () => ({
      signIn: async (data: AuthData) => {
        const token = await getToken(data);

        dispatch({ type: 'SIGN_IN', token: token });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data: AuthData) => {
        const token = await getToken(data);

        dispatch({ type: 'SIGN_IN', token });
      },
      isSignedIn: state.isSignIn,
    }),
    [state.isSignIn],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
