import React, { useRef } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import DataProvider from '@src/context/DataContext/DataProvider';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import StackNavigator from '@src/navigation/StackNavigator';
import AuthProvider from '@src/context/AuthContext/AuthProvider';
import AppProvider from '@src/context/AppContext/AppProvider';
import Analytics from 'appcenter-analytics';

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  const onScreenOpen = async (screenName: string) => {
    try {
      await Analytics.trackEvent('onScreenOpen', { ScreenName: screenName });
    } catch (error) {
      console.error('Error tracking screen view:', error);
    }
  };

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar backgroundColor="#000000" />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.getCurrentRoute()?.name;

          if (previousRouteName !== currentRouteName) {
            routeNameRef.current = currentRouteName;

            await onScreenOpen(currentRouteName as string);
          }
        }}>
        <AuthProvider>
          <AppProvider>
            <DataProvider>
              <StackNavigator />
            </DataProvider>
          </AppProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

// export { default } from './.storybook';

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
