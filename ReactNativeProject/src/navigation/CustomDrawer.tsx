import React, { FC } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Share from 'react-native-share';
import EmailIcon from '@assets/images/icons/menu-email.svg';
import PhoneIcon from '@assets/images/icons/menu-call.svg';
import ShareIcon from '@assets/images/icons/menu-share.svg';
import { styles } from './styles';

export const CustomDrawer: FC<DrawerContentComponentProps> = props => {
  const onShareLink = async () => {
    try {
      const options = {
        title: 'Share Link',
        message: 'Check out this awesome app!',
        url: 'https://my-app.com',
      };

      await Share.open(options);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      {Object.entries(props.descriptors).map(
        ([key, { options, navigation, route }], index) => {
          const focused = index === props.state.index;
          const label = () => (
            <Text style={options.drawerLabelStyle}>{options.title}</Text>
          );

          return (
            <React.Fragment key={key}>
              <DrawerItem
                {...options}
                label={label}
                icon={options.drawerIcon}
                onPress={() => navigation.navigate(route.name)}
                style={!!index && focused && styles.drawerItemFocused}
              />
              {!index && <Text style={styles.drawerSubHeader}>My Account</Text>}
            </React.Fragment>
          );
        },
      )}
      <View style={styles.separator} />
      <Text style={styles.drawerSubHeader}>Support</Text>
      <DrawerItem
        labelStyle={styles.drawerLabel}
        label="Email"
        onPress={() => {}}
        icon={EmailIcon}
      />
      <DrawerItem
        labelStyle={styles.drawerLabel}
        label="Call"
        onPress={() => {}}
        icon={PhoneIcon}
      />
      <View style={styles.separator} />
      <DrawerItem
        labelStyle={styles.drawerLabel}
        label="Share"
        onPress={onShareLink}
        icon={ShareIcon}
      />
    </DrawerContentScrollView>
  );
};
