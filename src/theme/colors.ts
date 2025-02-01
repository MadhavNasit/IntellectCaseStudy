/**
 * A color helper for defining the app theme
 * Color names are taken from https://www.color-name.com/hex
 */
export const colors = {
  deepNavy: '#0f1b27',
  ivory: '#fcfbf7',
  white: '#ffffff',
  black: '#000000',
  ebony: '#0b0c0e',
  platinum: '#e6e4e5',
  pearl: '#fcfbf6',
  gray: '#7d7e7e',
  red: '#F00001',
  green: '#33bb7b',
  darkGray: '#264b5b',
  cadetGrey: '#93a5ad',
  softSand: '#eae2df',
  brightGray: '#E9E9E9',
  deepSpace: '#405a71',
  metalGray: '#768087',
};

export const themeColors = {
  light: {
    background: colors.ivory,
    card: colors.white,
    text: colors.ebony,
    text_light: colors.deepSpace,
    border: colors.platinum,
  },
  dark: {
    background: colors.ebony,
    card: colors.deepNavy,
    text: colors.platinum,
    text_light: colors.deepSpace,
    border: colors.gray,
  },
  common: {
    primary: colors.deepNavy,
    secondary: colors.darkGray,
    bg_secondary: colors.softSand,
    card_secondary: colors.brightGray,
    tab_active: colors.pearl,
    tab_inactive: colors.gray,
    danger: colors.red,
    active_card: colors.metalGray,
  },
};
