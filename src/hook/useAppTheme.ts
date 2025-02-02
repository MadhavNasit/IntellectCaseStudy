import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useAppSelector, selectTheme } from 'store';
import { darkTheme, lightTheme } from 'theme';

/**
 * Custom hook to get the current app theme based on the user's preference or system color scheme.
 */
export const useAppTheme = () => {
  const scheme = useColorScheme();
  const theme = useAppSelector(selectTheme);

  return useMemo(() => {
    if (theme === 'dark') {
      return darkTheme;
    }
    if (theme === 'light') {
      return lightTheme;
    }
    return scheme === 'dark' ? darkTheme : lightTheme;
  }, [theme, scheme]);
};
