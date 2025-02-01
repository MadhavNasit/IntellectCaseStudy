import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from 'theme';

/**
 * Custom hook to get the current app theme based on the system color scheme.
 * @returns {object} The selected theme object (either `darkTheme` or `lightTheme`).
 *
 * TODO: Extend this hook to allow user-defined theme overrides instead of always returning the system default.
 */
export const useAppTheme = () => {
  const scheme = useColorScheme();

  return useMemo(() => (scheme === 'dark' ? darkTheme : lightTheme), [scheme]);
};
