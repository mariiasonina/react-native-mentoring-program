import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { useAppData } from '@src/context/AppContext/AppContext';
import { effects } from '@src/styles/effects';
import { MODALS } from './constants';
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Modal'>;
};

export const ModalScreen = ({ navigation, route }: Props) => {
  const { signOut } = useAuth();
  const { resetUserData } = useAppData();
  const { modalType, message } = route.params;
  const { header, text, buttons, icon } = MODALS[modalType];

  const onPress = async (action: string) => {
    switch (action) {
      case 'GO_BACK':
        navigation.goBack();
        break;
      case 'GO_SIGN_IN':
        navigation.navigate('SignIn');
        break;
      case 'GO_SIGN_UP':
        navigation.navigate('SignUp');
        break;
      case 'LOGOUT':
        resetUserData();
        await signOut();
        navigation.navigate('SignIn');
        break;

      default:
        break;
    }
  };

  return (
    <View style={[styles.modalContainer, effects.shadow]}>
      <View style={styles.modal}>
        {icon}
        {header && <Text style={styles.header}>{header}</Text>}
        <Text style={styles.text}>{message || text}</Text>
        <View style={styles.buttonsContainer}>
          {buttons.map(({ title, action, isRedColor }, index) => (
            <Pressable
              key={index}
              style={[
                styles.button,
                effects.shadow,
                isRedColor && styles.redButton,
              ]}
              onPress={() => onPress(action)}>
              <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};
