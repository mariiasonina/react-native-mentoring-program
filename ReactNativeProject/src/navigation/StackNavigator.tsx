import React, { FC } from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetailsScreen } from '@src/screens/ProductDetailsScreen/ProductDetailsScreen';
import { ProductImagesScreen } from '@src/screens/ProductImagesScreen/ProductImagesScreen';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import FavoriteIcon from '@assets/images/icons/favorite.svg';
import ShoppingCartIcon from '@assets/images/icons/shopping-cart.svg';
import ArrowBackIcon from '@assets/images/icons/arrow-back.svg';
import SearchIcon from '@assets/images/icons/search.svg';
import { ModalScreen } from '@src/screens/ModalScreen/ModalScreen';
import { CartScreen } from '@src/screens/CartScreens/CartScreen';
import DrawerNavigator from './DrawerNavigator';
import { screens } from './RouteItems';
import { styles } from './styles';
import { SignInScreen } from '@src/screens/SignInScreen/SignInScreen';

export type RootStackParamList = {
  MainStack: undefined;
  Main: undefined;
  ProductDetails: { productId: string };
  ProductImages: { productId: string };
  Modal: { modalType: string };
  Cart: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const { isSignedIn } = useAuth();

  const headerRight = (navigation: any, Icon: FC<SvgProps>) => (
    <View style={styles.stackHeaderRight}>
      <Icon color="white" />
      <ShoppingCartIcon
        onPress={() => navigation.navigate(screens.cart.name)}
      />
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
      <Stack.Group>
        <Stack.Screen
          name="MainStack"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={({ navigation }) => ({
            headerRight: () => headerRight(navigation, FavoriteIcon),
          })}
        />
        <Stack.Screen name="ProductImages" component={ProductImagesScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={({ navigation }) => ({
          presentation: 'modal',
          cardStyle: styles.modal,
          headerRight: () => headerRight(navigation, SearchIcon),
        })}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>

      {!isSignedIn && (
        <Stack.Group>
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SignInScreen}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
