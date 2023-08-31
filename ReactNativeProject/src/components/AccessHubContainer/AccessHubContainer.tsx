import React, { PropsWithChildren } from 'react';
import { View, Text, Button, ScrollView, Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { effects } from '@src/styles/effects';
import ArrowForwardIcon from '@assets/images/icons/arrow-forward.svg';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { styles } from './styles';

type Props = PropsWithChildren<{
  onHintAction: () => void;
  onPress: () => Promise<void>;
  buttonTitle: string;
  actionHintText: string;
  loading: boolean;
  isSkipLogin?: boolean;
}>;

export const AccessHubContainer = ({
  onHintAction,
  onPress,
  buttonTitle,
  actionHintText,
  children,
  loading,
  isSkipLogin,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSkipLogin = () => navigation.navigate('Main');

  return (
    <ScrollView
      contentContainerStyle={styles.accessHubContainer}
      style={styles.accessHub}>
      <View style={[styles.topBar, effects.shadow]} />
      <View style={styles.content}>
        <Text style={styles.header}>{'Ecomerce\nStore'}</Text>
        {children}
        <Button
          title={buttonTitle}
          color="#008ACE"
          onPress={onPress}
          disabled={loading}
        />
        <Text style={styles.actionHintText} onPress={onHintAction}>
          {actionHintText}
        </Text>
      </View>
      {isSkipLogin && (
        <Pressable
          style={[styles.skipLogin, effects.shadow]}
          onPress={onSkipLogin}>
          <Text style={styles.skipLoginText}>Skip login</Text>
          <ArrowForwardIcon />
        </Pressable>
      )}
    </ScrollView>
  );
};
