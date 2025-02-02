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
          component: './src/component',
          asset: './src/asset',
          hook: './src/hook',
          theme: './src/theme',
          i18n: './src/i18n',
          utils: './src/utils',
          constant: './src/constant',
          store: './src/store',
        },
      },
    ],
  ],
};
