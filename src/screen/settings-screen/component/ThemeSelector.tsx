import { Button, Text } from 'component';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, selectTheme, updateTheme } from 'store';
import { s, spacing, vs } from 'utils';

/**
 * ThemeSelector component allows the user to select their preferred theme
 * (auto, light, or dark). It dispatches the theme update action to the Redux store
 * based on the user's choice.
 */
export const ThemeSelector = () => {
  // Redux hooks
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  /**
   * Handles the theme change by dispatching the updateTheme action.
   */
  const handleThemeChange = (newTheme: AppState['theme']) => {
    dispatch(updateTheme(newTheme));
  };

  return (
    <View style={styles.container}>
      <Text tx="settings.chooseTheme" size="h3" style={styles.title} />
      <Button
        titleTx="settings.auto"
        preset={theme === 'auto' ? 'secondary' : 'outline'}
        onPress={() => handleThemeChange('auto')}
      />
      <Button
        titleTx="settings.light"
        preset={theme === 'light' ? 'secondary' : 'outline'}
        onPress={() => handleThemeChange('light')}
      />
      <Button
        titleTx="settings.dark"
        preset={theme === 'dark' ? 'secondary' : 'outline'}
        onPress={() => handleThemeChange('dark')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(spacing.lg),
    paddingHorizontal: s(spacing.md),
    rowGap: vs(spacing.sm),
  },
  title: {
    marginBottom: vs(spacing.sm),
  },
});
