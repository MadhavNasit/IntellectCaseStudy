import { Theme } from '@react-navigation/native';
import { colors, themeColors } from 'theme/colors';

export type Colors = ThemeWithMode['light'] &
  ThemeWithMode['common'] &
  typeof colors &
  Theme['colors'];

export interface ThemeWithMode {
  light: typeof themeColors.light;
  dark: typeof themeColors.dark;
  common: typeof themeColors.common;
}

// Define extended theme type that literally *extends* Theme
export interface ExtendedTheme extends Theme {
  // Reference the Theme type's colors field and make our field an intersection
  // Learn more:
  //   https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
  //   https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
  colors: Colors;
}

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}
