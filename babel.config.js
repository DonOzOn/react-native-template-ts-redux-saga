/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.json'],
        root: ['./src'],
      },
    ],
    'react-native-reanimated/plugin', // needs to be last
  ],
  presets: ['module:@react-native/babel-preset'],
};
