import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DataProvider from '@src/context/DataContext/DataProvider';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import StackNavigator from '@src/navigation/StackNavigator';
import AuthProvider from '@src/context/AuthContext/AuthProvider';
import AppProvider from '@src/context/AppContext/AppProvider';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar backgroundColor="#000000" />
      <NavigationContainer>
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

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
