import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text } from 'component';
import { AppState, selectLanguage, updateLanguage } from 'store';
import { s, spacing, vs } from 'utils';
import i18n from 'i18n';

/**
 * LanguageSelector component allows the user to select their preferred language
 * (English, Spanish, or French). It dispatches the language update action to the Redux store
 * based on the user's choice.
 */
export const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  /**
   * Handles the language change by dispatching the updateLanguage action.
   *
   * @param {AppState['language']} newLanguage - The new language to apply ('en', 'es', or 'fr').
   */
  const handleLanguageChange = (newLanguage: AppState['language']) => {
    i18n.changeLanguage(newLanguage);
    dispatch(updateLanguage(newLanguage));
  };

  return (
    <View style={styles.container}>
      <Text tx="settings.chooseLanguage" size="h3" style={styles.title} />
      <Button
        titleTx="settings.english"
        preset={language === 'en' ? 'secondary' : 'outline'}
        onPress={() => handleLanguageChange('en')}
      />
      <Button
        titleTx="settings.french"
        preset={language === 'fr' ? 'secondary' : 'outline'}
        onPress={() => handleLanguageChange('fr')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vs(spacing.lg),
    paddingHorizontal: s(spacing.md),
    rowGap: vs(spacing.sm),
  },
  title: {
    marginBottom: vs(spacing.sm),
  },
});
