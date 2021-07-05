module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:prettier/recommended'
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2, { 'SwitchCase': 1 }],
    'max-len': ['warn', { code: 120 }],
    'no-console': ['off'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error', { 'checksVoidReturn': false }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        'allowExpressions': true
      }
    ]
  }
};
