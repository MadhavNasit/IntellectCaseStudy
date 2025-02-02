import React from 'react';
import { StyleSheet } from 'react-native';
import { Screen } from 'component';
import { ThemeSelector } from './component/ThemeSelector';

export const SettingsScreen = () => {
  return (
    <Screen safeAreaEdges={['top']} contentContainerStyle={styles.container}>
      <ThemeSelector />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
