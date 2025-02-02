import globals from 'globals';
import tseslint from 'typescript-eslint';

import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['eslint.config.mjs'] },
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // {
  //   rules: {
  //     // Possible Problems (https://eslint.org/docs/latest/rules/#possible-problems)
  //     'no-constructor-return': 'error',
  //     'no-duplicate-imports': 'error',
  //     'no-promise-executor-return': 'error',
  //     'no-self-compare': 'error',
  //     'no-template-curly-in-string': 'error',
  //     'no-unused-private-class-members': 'error',

  //     // Suggestions (https://eslint.org/docs/latest/rules/#suggestions)
  //     'block-scoped-var': 'error',
  //     camelcase: 'error',
  //     'capitalized-comments': 'error',
  //     'class-methods-use-this': 'error',
  //     'consistent-return': 'error',
  //     'default-case': 'error',
  //     'default-case-last': 'error',
  //     'default-param-last': 'error',
  //     'dot-notation': 'error',
  //     eqeqeq: ['error', 'always'],
  //     'func-names': ['error', 'always'],
  //     'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  //     'guard-for-in': 'error',
  //     'max-depth': ['error', { max: 2 }],
  //     'max-lines': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
  //     'max-lines-per-function': ['error', { max: 30, skipBlankLines: true, skipComments: true }],
  //     'new-cap': ['error', { newIsCap: true, capIsNew: false }],
  //     'no-array-constructor': 'error',
  //     'no-console': 'error',
  //     'no-continue': 'error',
  //     'no-else-return': 'error',
  //     'no-empty-function': ['error', { allow: ['constructors'] }],
  //     'no-eq-null': 'error',
  //     'no-extend-native': 'error',
  //     'no-implicit-coercion': 'error',
  //     'no-inline-comments': 'error',
  //     'no-invalid-this': 'error',
  //     'no-labels': 'error',
  //     'no-mixed-operators': 'error',
  //     'no-multi-assign': 'error',
  //     'no-negated-condition': 'error',
  //     'no-nested-ternary': 'error',
  //     'no-new': 'error',
  //     'no-new-object': 'error',
  //     'no-new-wrappers': 'error',
  //     'no-param-reassign': 'error',
  //     'no-plusplus': 'error',
  //     'no-return-assign': 'error',
  //     'no-return-await': 'error',
  //     'no-shadow': 'error',
  //     'no-throw-literal': 'error',
  //     'no-undef-init': 'error',
  //     'no-unneeded-ternary': 'error',
  //     'no-useless-return': 'error',
  //     'no-var': 'error',
  //     'no-void': 'error',
  //     'object-shorthand': 'error',
  //     'prefer-const': 'error',
  //     'prefer-destructuring': 'error',
  //     'prefer-object-spread': 'error',
  //     'require-await': 'error',
  //     'spaced-comment': 'error',
  //     'no-global-assign': 'error',
  //     'no-shadow-restricted-names': 'error',

  //     // Layout & Formatting (https://eslint.org/docs/latest/rules/#layout--formatting)
  //     // ...

  //     '@typescript-eslint/interface-name-prefix': 'off',
  //     '@typescript-eslint/explicit-module-boundary-types': 'off',
  //     '@typescript-eslint/no-explicit-any': 'error',
  //     '@typescript-eslint/explicit-function-return-type': 'error',
  //   },
  // },
];
