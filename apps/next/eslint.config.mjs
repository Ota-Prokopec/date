import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import next from '@next/eslint-plugin-next'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: react,
      next: next,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-key': 'error',
      'react/prop-types': 'off', // If you’re using TypeScript
      'react/react-in-jsx-scope': 'off', // No need in Next.js
      'react/no-array-index-key': 'warn', // Avoid using array index as key
      //'react/self-closing-comp': 'warn', // Prefer self-closing tags when possible

      // ✅ React Hooks rules
      'react-hooks/rules-of-hooks': 'error', // Ensures hooks are called correctly
      'react-hooks/exhaustive-deps': 'warn', // Dependency array warnings

      // ✅ Next.js rules
      'next/no-img-element': 'warn', // Prefer <Image /> component
      'next/no-html-link-for-pages': 'off', // Disable if using custom routing
      'next/no-head-element': 'warn', // Use <Head /> instead of <head>

      // ✅ Miscellaneous
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  }
)
