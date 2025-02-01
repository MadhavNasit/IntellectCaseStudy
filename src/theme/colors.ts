/**
 * A color helper for defining the app theme
 * Color names are taken from https://www.color-name.com/hex
 */
export const colors = {
  deepNavy: '#0f1b27',
  ivory: '#fcfbf7',
  white: '#ffffff',
  ebony: '#0b0c0e',
  platinum: '#e6e4e5',
  pearl: '#fcfbf6',
  gray: '#7d7e7e',
  red: '#F00001',
};

export const themeColors = {
  light: {
    primary: colors.deepNavy,
    background: colors.ivory,
    card: colors.white,
    text: colors.ebony,
    border: colors.platinum,
  },
  dark: {
    primary: colors.deepNavy,
    background: colors.ebony,
    card: colors.deepNavy,
    text: colors.platinum,
    border: colors.gray,
  },
  common: {
    tab_active: colors.pearl,
    tab_inactive: colors.gray,
    danger: colors.red,
  },
};
