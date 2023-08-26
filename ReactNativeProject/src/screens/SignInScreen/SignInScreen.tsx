import React, { useState } from 'react';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { AccessHubContainer } from '@src/components/AccessHubContainer/AccessHubContainer';
import { AnimatedInput } from '@src/components/AnimatedInput/AnimatedInput';
import { useAppData } from '@src/context/AppContext/AppContext';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export const SignInScreen = ({ navigation }: Props) => {
  const { signIn } = useAuth();
  const { changeUserField, user } = useAppData();
  const [loading, setLoading] = useState(false);

  const onPress = async () => {
    setLoading(true);

    const { email, userPassword } = user;
    const signInResult: any = await signIn({ email, userPassword });

    if (!signInResult.error) {
      navigation.navigate('MainStack');
    } else {
      navigation.navigate('Modal', {
        modalType: 'SIGN_IN_ERROR',
        message: signInResult.error,
      });
    }

    setLoading(false);
  };

  const onHintAction = () => navigation.navigate('SignUp');

  return (
    <AccessHubContainer
      onPress={onPress}
      buttonTitle="Sign in"
      actionHintText="New here? Sign Up"
      onHintAction={onHintAction}
      loading={loading}
      isSkipLogin={true}>
      <AnimatedInput
        value={user.email}
        label="Email Address"
        storageKey="email"
        onChange={changeUserField}
      />
      <AnimatedInput
        value={user.userPassword}
        label="Password"
        storageKey="userPassword"
        secureTextEntry
        onChange={changeUserField}
      />
    </AccessHubContainer>
  );
};
