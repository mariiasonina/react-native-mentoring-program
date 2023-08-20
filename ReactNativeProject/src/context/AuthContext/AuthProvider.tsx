import React, { PropsWithChildren, Reducer, useMemo, useReducer } from 'react';
import { createAccount, getToken } from '@src/api/api';
import AuthContext, { UserData } from './AuthContext';

type StateProps = {
  isSignIn: boolean;
  userToken: string;
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer<Reducer<StateProps, any>>(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignIn: true,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignIn: false,
            userToken: '',
          };
        default:
          return { ...prevState };
      }
    },
    {
      isSignIn: false,
      userToken: '',
    },
  );

  const authContext = useMemo(
    () => ({
      signIn: async (data: UserData) => {
        const token = await getToken(data);

        if (!token.error) {
          dispatch({
            type: 'SIGN_IN',
            token: token.access_token,
          });
        }

        return token;
      },
      signOut: async () => {
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data: Required<UserData>) => {
        const result = await createAccount(data);

        if (!result.error) {
          const token = await getToken({
            email: data.email,
            userPassword: data.userPassword,
          });

          dispatch({ type: 'SIGN_UP', token: token.access_token });
        }

        return result;
      },
      isSignedIn: state.isSignIn,
      userToken: state.userToken,
    }),
    [state.isSignIn, state.userToken],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
