module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules/', 'dist/', 'build/', 'public/'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/no-unescaped-entities': 'off',
    'prefer-const': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/media-has-caption': 'off',
    'spaced-comment': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
