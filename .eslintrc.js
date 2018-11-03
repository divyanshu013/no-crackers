module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'react-hooks/rules-of-hooks': 'error',
  },
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
};
