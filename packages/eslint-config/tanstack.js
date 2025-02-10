// eslint.config.js

export default {
  extends: [
    'eslint:recommended',
    'prettier',
    './react-internal.js',
    'turbo',
    'plugin:@tanstack/eslint-plugin-router/recommended',
  ],
};
