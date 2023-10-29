module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': 'warn',
    // 'no-unused-vars': 'error',
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': ['off'], // 把他加上重启项目就行了
    '@typescript-eslint/no-namespace': ['off']
  }
};
