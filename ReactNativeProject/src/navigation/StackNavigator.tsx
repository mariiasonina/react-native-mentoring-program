import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetailsScreen } from '@src/screens/ProductDetailsScreen/ProductDetailsScreen';
import { ProductImagesScreen } from '@src/screens/ProductImagesScreen/ProductImagesScreen';
import FavoriteIcon from '@assets/images/icons/favorite.svg';
import ShoppingCartIcon from '@assets/images/icons/shopping-cart.svg';
import ArrowBackIcon from '@assets/images/icons/arrow-back.svg';
import DrawerNavigator from './DrawerNavigator';
import { styles } from './styles';

export type RootStackParamList = {
  MainStack: undefined;
  ProductDetails: { productId: string };
  ProductImages: { productId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const headerRight = () => (
    <View style={styles.stackHeaderRight}>
      <FavoriteIcon />
      <ShoppingCartIcon />
    </View>
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerLeft: ArrowBackIcon,
        headerLeftContainerStyle: styles.headerLeft,
        headerRightContainerStyle: styles.headerRight,
        headerTitle: '',
      }}>
      <Stack.Screen
        name="MainStack"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ headerRight }}
      />
      <Stack.Screen name="ProductImages" component={ProductImagesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
