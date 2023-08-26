import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

export const CrashTestScreen = () => {
  const triggerDummyCrash = async () => {
    Crashes.generateTestCrash();

    await Analytics.trackEvent('onTriggerCrash');
  };

  return (
    <View style={styles.crash}>
      <Text>Crash Test</Text>
      <Button
        title="Trigger Crash"
        color="#DD6B55"
        onPress={triggerDummyCrash}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  crash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
