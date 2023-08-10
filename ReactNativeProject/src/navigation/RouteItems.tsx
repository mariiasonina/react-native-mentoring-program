import React from 'react';
import { Text, View } from 'react-native';
import ShoppingCartIcon from '@assets/images/icons/shopping-cart.svg';
import OrdersIcon from '@assets/images/icons/menu-orders.svg';
import ProfileIcon from '@assets/images/icons/menu-profile.svg';
import WishListIcon from '@assets/images/icons/menu-wish-list.svg';
import CartIcon from '@assets/images/icons/menu-cart.svg';
import { MainScreen } from '@src/screens/MainScreen/MainScreen';
import { ProfileScreen } from '@src/screens/ProfileScreen/ProfileScreen';
import { WishListScreen } from '@src/screens/WishListScreen/WishListScreen';
import { OrdersScreen } from '@src/screens/OrdersScreen/OrdersScreen';
import { CartScreen } from '@src/screens/CartScreens/CartScreen';
import { styles } from './styles';

export const screens = {
  main: { name: 'Main', title: 'Ecommerce Store' },
  profile: { name: 'Profile', title: 'My Profile' },
  wishList: { name: 'WishList', title: 'My Wish List' },
  cart: { name: 'Cart', title: 'My Cart' },
  orders: { name: 'Orders', title: 'My Orders' },
};

const headerRight = (navigation: any) => (
  <View style={styles.headerRight}>
    <ShoppingCartIcon onPress={() => navigation.navigate(screens.cart.name)} />
  </View>
);

export const routes = [
  {
    name: screens.main.name,
    title: screens.main.title,
    component: MainScreen,
    headerTitle: () => (
      <Text style={styles.headerTitle}>{screens.main.title}</Text>
    ),
    headerRight,
    drawerLabelStyle: styles.drawerHeader,
  },
  {
    name: screens.profile.name,
    title: screens.profile.title,
    component: ProfileScreen,
    headerTitle: () => (
      <Text style={styles.headerTitle}>{screens.profile.title}</Text>
    ),
    headerRight,
    drawerIcon: () => <ProfileIcon />,
    drawerLabelStyle: styles.drawerLabel,
  },
  {
    name: screens.wishList.name,
    title: screens.wishList.title,
    component: WishListScreen,
    headerTitle: () => (
      <Text style={styles.headerTitle}>{screens.wishList.title}</Text>
    ),
    headerRight,
    drawerIcon: () => <WishListIcon />,
    drawerLabelStyle: styles.drawerLabel,
  },
  {
    name: screens.cart.name,
    title: screens.cart.title,
    component: CartScreen,
    headerTitle: () => (
      <Text style={styles.headerTitle}>{screens.cart.title}</Text>
    ),
    drawerIcon: () => <CartIcon />,
    drawerLabelStyle: styles.drawerLabel,
  },
  {
    name: screens.orders.name,
    title: screens.orders.title,
    component: OrdersScreen,
    headerTitle: () => (
      <Text style={styles.headerTitle}>{screens.orders.title}</Text>
    ),
    drawerIcon: () => <OrdersIcon />,
    drawerLabelStyle: styles.drawerLabel,
  },
];
