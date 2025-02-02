import React from 'react';
import { StyleSheet } from 'react-native';
import { Screen } from 'component';
import { LanguageSelector, ThemeSelector } from './component';

/**
 * SettingsScreen component
 *
 * This component represents the settings screen of the app. It provides options for users to
 * select their preferred theme and language. The `ThemeSelector` and `LanguageSelector` components
 * are included to allow the user to personalize their app experience.
 */
export const SettingsScreen = () => {
  return (
    <Screen safeAreaEdges={['top']} contentContainerStyle={styles.container}>
      {/* Theme selection option */}
      <ThemeSelector />

      {/* Language selection option */}
      <LanguageSelector />
    </Screen>
  );
};

// Styles for the SettingsScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
