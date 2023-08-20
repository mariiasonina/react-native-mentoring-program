import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnimatedInput } from '@src/components/AnimatedInput/AnimatedInput';
import AvatarIcon from '@assets/images/icons/avatar.svg';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { useAppData } from '@src/context/AppContext/AppContext';
import { ProfileType } from '@src/context/AppContext/types';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { LoginFirst } from '@src/components/LoginFirst/LoginFirst';
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export const ProfileScreen = ({ navigation }: Props) => {
  const { isSignedIn } = useAuth();
  const { changeProfileField, profile, manageAddress, setProfileData } =
    useAppData();
  const [profileState, setProfileState] = useState<ProfileType>(profile);
  const [uriData, setUriData] = useState<{ [key: string]: string | undefined }>(
    {},
  );

  useEffect(() => {
    if (profile.id !== profileState.id) {
      setProfileState(profile);
    }
  }, [profile, profileState.id]);

  useEffect(() => {
    const getUriData = async () => {
      const storedUriData = await AsyncStorage.getItem('uriData');

      if (storedUriData) {
        const parsedUriData = JSON.parse(storedUriData);

        setUriData(parsedUriData);
      }
    };
    getUriData();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useFocusEffect(useCallback(() => () => setProfileData(profileState), []));

  const onLogout = () => {
    navigation.navigate('Modal', { modalType: 'LOGOUT' });
  };

  const onUpdateData = () => {
    manageAddress(!profile.id ? 'CREATE' : 'UPDATE');
    setProfileState(profile);
  };

  const onUploadAvatar = async () => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
    };

    try {
      await launchImageLibrary(options, setImageUri);
    } catch (error) {
      console.log(error);
    }
  };

  const setImageUri = async ({ assets }: ImagePickerResponse) => {
    if (assets?.length) {
      const newUriData = { ...uriData, [profile.id]: assets[0]?.uri };
      await AsyncStorage.setItem('uriData', JSON.stringify(newUriData));

      setUriData(newUriData);
    }
  };

  const isEqual = JSON.stringify(profile) === JSON.stringify(profileState);

  if (!isSignedIn) {
    return <LoginFirst />;
  }

  return (
    <ScrollView
      style={styles.profile}
      contentContainerStyle={styles.profileContainer}>
      <AnimatedInput
        value={profile.fullName}
        label="Full name"
        storageKey="fullName"
        onChange={changeProfileField}
      />
      <TouchableOpacity style={styles.avatarContainer} onPress={onUploadAvatar}>
        {uriData[profile.id] ? (
          <Image style={styles.avatar} source={{ uri: uriData[profile.id] }} />
        ) : (
          <AvatarIcon />
        )}
      </TouchableOpacity>
      <AnimatedInput
        value={profile.phone}
        label="Mobile number"
        storageKey="phone"
        onChange={changeProfileField}
      />
      <AnimatedInput
        value={profile.city}
        label="City"
        storageKey="city"
        onChange={changeProfileField}
      />
      <AnimatedInput
        value={profile.locality}
        label="Locality, area or street"
        storageKey="locality"
        onChange={changeProfileField}
      />
      <AnimatedInput
        value={profile.build}
        label="Flat no., Building name"
        storageKey="build"
        onChange={changeProfileField}
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="Update"
          color="#008ACE"
          onPress={onUpdateData}
          disabled={isEqual}
        />
        <Button title="Logout" color="#008ACE" onPress={onLogout} />
      </View>
    </ScrollView>
  );
};
