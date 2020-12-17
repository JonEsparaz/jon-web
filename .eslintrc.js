module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-typescript', 'prettier', 'prettier/react'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/require-default-props': 0,
  },
};
