import React, { useState } from 'react';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { AnimatedInput } from '@src/components/AnimatedInput/AnimatedInput';
import { AccessHubContainer } from '@src/components/AccessHubContainer/AccessHubContainer';
import { useAppData } from '@src/context/AppContext/AppContext';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export const SignUpScreen = ({ navigation }: Props) => {
  const { signUp } = useAuth();
  const { changeUserField, user } = useAppData();
  const [loading, setLoading] = useState(false);

  const onPress = async () => {
    setLoading(true);

    const signUpResult: any = await signUp(user);

    if (!signUpResult.error) {
      navigation.navigate('MainStack');
    } else {
      navigation.navigate('Modal', {
        modalType: 'SIGN_UP_ERROR',
        message: signUpResult.error,
      });
    }

    setLoading(false);
  };

  const onHintAction = () => navigation.navigate('SignIn');

  return (
    <AccessHubContainer
      onPress={onPress}
      buttonTitle="Sign up"
      actionHintText="Already have account? Sign In"
      onHintAction={onHintAction}
      loading={loading}>
      <AnimatedInput
        value={user.userName}
        label="Full Name"
        storageKey="userName"
        onChange={changeUserField}
      />
      <AnimatedInput
        value={user.email}
        label="Emai Address"
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
      <AnimatedInput
        value={user.passwordConfirmation}
        label="Confirm Password"
        storageKey="passwordConfirmation"
        secureTextEntry
        onChange={changeUserField}
      />
    </AccessHubContainer>
  );
};
