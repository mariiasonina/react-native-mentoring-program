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
import { SignInScreen } from '@src/screens/SignInScreen/SignInScreen';
import { SignUpScreen } from '@src/screens/SignUpScreen/SignUpScreen';
import { SearchScreen } from '@src/screens/SearchScreen/SearchScreen';
import { OrderDetailsScreen } from '@src/screens/OrderDetailsScreen/OrderDetailsScreen';
import { MapScreen } from '@src/screens/MapScreen/MapScreen';
import { OrderConfirmationScreen } from '@src/screens/OrderConfirmationScreen/OrderConfirmationScreen';
import { screens } from './RouteItems';
import DrawerNavigator from './DrawerNavigator';
import { styles } from './styles';

export type RootStackParamList = {
  MainStack: undefined;
  Main: undefined;
  ProductDetails: { productId: string };
  ProductImages: { productId: string };
  Modal: { modalType: string; message?: string };
  Cart: undefined;
  Search: undefined;
  OrderDetails: { orderId: string };
  Map: undefined;
  OrderConfirmation: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const { isSignedIn } = useAuth();

  const headerRight = (
    navigation: any,
    Icon?: FC<SvgProps>,
    iconNavigationPath?: string,
  ) => (
    <View style={styles.stackHeaderRight}>
      {Icon && (
        <Icon
          color="white"
          onPress={() => navigation.navigate(iconNavigationPath)}
        />
      )}
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
            headerRight: () =>
              headerRight(navigation, FavoriteIcon, 'WishList'),
          })}
        />
        <Stack.Screen name="ProductImages" component={ProductImagesScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetailsScreen}
          options={({ navigation }) => ({
            headerRight: () => headerRight(navigation),
          })}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={({ navigation }) => ({
            headerRight: () => headerRight(navigation),
          })}
        />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={({ navigation }) => ({
          presentation: 'modal',
          cardStyle: styles.modal,
          headerRight: () => headerRight(navigation, SearchIcon, 'Search'),
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
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
