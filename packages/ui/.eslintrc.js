export default {
  root: true,
  extends: ['@repo/eslint-config/react-internal.js'],
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  rules: {
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'no-unused-vars': ['warn', { args: 'none', vars: 'all' }],
  },
}
z
