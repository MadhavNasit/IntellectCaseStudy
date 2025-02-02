/**
 * Themes allow you to change the colors of various components provided by React Navigation. You can use themes to:
 * Customize the colors match your brand
 * Provide light and dark themes based on the time of the day or user preference
 */
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { colors, themeColors } from 'theme/colors';
import { ExtendedTheme } from 'theme/theme.types';

/**
 * Light theme colors
 */
const lightThemeColors = {
  ...colors,
  ...DefaultTheme.colors,
  ...themeColors.common,
  ...themeColors.light,
};

/**
 * Dark theme colors
 */
const darkThemeColors = {
  ...colors,
  ...DarkTheme.colors,
  ...themeColors.common,
  ...themeColors.dark,
};

/** Light mode theme and colors */
export const lightTheme: ExtendedTheme = {
  ...DefaultTheme,
  dark: false,
  colors: lightThemeColors,
};

/** Dark mode theme and colors */
export const darkTheme: ExtendedTheme = {
  ...DarkTheme,
  dark: true,
  colors: darkThemeColors,
};
