module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/jest.config.js',
    '<rootDir>/__mocks__/setupMocks.ts',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-redux)/)',
  ],
  testPathIgnorePatterns: ['<rootDir>/__tests__/testUtils.ts'],
};
