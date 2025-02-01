import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTab from 'navigation/BottomTab';
import { useAppTheme } from 'hook';

/**
 * AppContainer is the root component responsible for managing the application's navigation.
 * It wraps the navigation structure inside a NavigationContainer and applies the theme.
 *
 * Features:
 * - Provides a navigation container for the app
 * - Applies a custom theme using `useAppTheme()`
 * - Renders the bottom tab navigation component
 */
const AppContainer: React.FC = () => {
  // Retrieve the current theme using the custom hook
  const theme = useAppTheme();

  return (
    <NavigationContainer theme={theme}>
      <BottomTab />
    </NavigationContainer>
  );
};

export default AppContainer;
