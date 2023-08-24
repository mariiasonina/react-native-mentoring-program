import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { effects } from '@src/styles/effects';
import { styles } from './styles';
import { MODALS } from './constants';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Modal'>;
};

export const ModalScreen = ({ navigation, route }: Props) => {
  const { modalType } = route.params;
  const { header, text, buttons, icon } = MODALS[modalType];

  const onPress = (action: string) => {
    switch (action) {
      case 'GO_BACK':
        navigation.goBack();
        break;
      case 'GO_SIGN_IN':
      case 'GO_SIGN_UP':
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
        <Text style={styles.text}>{text}</Text>
        <View style={styles.buttonsContainer}>
          {buttons.map(({ title, action }, index) => (
            <Pressable
              key={index}
              style={[styles.button, effects.shadow]}
              onPress={() => onPress(action)}>
              <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};
