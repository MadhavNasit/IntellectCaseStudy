module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '*': '.',
          root: './',
          src: './src',
          navigation: './src/navigation',
          screen: './src/screen',
          'navigation/*': './src/navigation/*',
        },
      },
    ],
  ],
};
