import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable } from 'react-native';
import BurgerIcon from '@assets/images/icons/burger.svg';
import { routes, screens } from './RouteItems';
import { CustomDrawer } from './CustomDrawer';
import { styles } from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const headerLeft = (navigation: any) => (
    <Pressable
      onPress={() => navigation.toggleDrawer()}
      style={styles.headerLeft}>
      <BurgerIcon />
    </Pressable>
  );

  return (
    <Drawer.Navigator
      initialRouteName={screens.main.name}
      screenOptions={({ navigation }) => ({
        headerStyle: styles.header,
        headerTitleAlign: 'center',
        drawerStyle: styles.drawerBar,
        headerLeft: () => headerLeft(navigation),
        drawerType: 'slide',
      })}
      drawerContent={CustomDrawer}>
      {routes.map(({ name, component, headerRight, ...options }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={component}
          options={({ navigation }) => ({
            headerRight: () => (headerRight ? headerRight(navigation) : null),
            ...options,
          })}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
