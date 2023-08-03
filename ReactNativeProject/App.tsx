import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DataProvider from '@src/context/DataProvider';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import StackNavigator from '@src/navigation/StackNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar backgroundColor="#000000" />
      <DataProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </DataProvider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
