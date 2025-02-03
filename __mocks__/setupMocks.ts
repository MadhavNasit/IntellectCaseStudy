import '@testing-library/react-native';

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  })),
}));

jest.mock('i18n', () => ({}));

jest.mock('store', () => {
  const actualStore = jest.requireActual('store');
  return {
    ...actualStore,
    persistor: {
      ...actualStore.persistor,
      persist: jest.fn(),
    },
  };
});

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn(),
  DefaultTheme: {
    colors: {
      primary: '#000000',
      background: '#ffffff',
      text: '#000000',
      // other colors...
    },
  },
  DarkTheme: {
    colors: {
      primary: '#ffffff',
      background: '#121212',
      text: '#ffffff',
      // other colors...
    },
  },
}));
