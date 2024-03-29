module.exports = {
  env: {jest: true, node: true, 'vue/setup-compiler-macros': true},
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:functional/no-exceptions',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  globals: {
    __statics: true,
    Capacitor: true,
    chrome: true,
    // Google Analytics
    cordova: true,
    ga: true,
    process: true,
  },
  overrides: [
    // eslint config
    {
      files: ['.eslintrc.js'],
      rules: {
        'max-lines': 'off',
      },
    },
    // json
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      // ESLint: Expected an assignment or function call and instead saw an expression. (@typescript-eslint/no-unused-expressions)
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        'comma-dangle': ['warn', 'never'],
        'jsonc/sort-keys': [
          'warn',
          {
            order: [
              //
              'name',
              'version',
              'scripts',
              'dependencies',
              'devDependencies',
              'engines',
              'pnpm',
            ],
            pathPattern: 'package.json$',
          },
        ],
        'max-len': 'off',
        'max-lines': 'off',
        'quote-props': 'off',
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    },
    {
      // mocks
      env: {jest: true},
      files: ['**/__mocks__/**/*.ts'],
      rules: {
        'max-classes-per-file': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-static-only-class': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    // storybook
    {
      files: ['**/*.stories.{t,t}s?(x)'],
      rules: {
        'max-statements': 'off',
        'no-console': 'off',
        'no-magic-numbers': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'vue/one-component-per-file': 'off',
        'vue/require-name-property': 'off',
      },
    },
    {
      // tests
      env: {jest: true},
      files: [
        '**/*.spec.skip.{j,t}s?(x)',
        /* unit */
        '**/*.spec.{j,t}s?(x)',
        /* e2e */
        '**/*.e2e.{j,t}s?(x)',
        /* type test */
        '**/*.tsd.{j,t}s?(x)',
      ],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'functional/no-throw-statements': 'off',
        'id-length': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-statements': 'off',
        'no-magic-numbers': 'off',
        'prefer-destructuring': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-document-cookie': 'off',
        'unicorn/no-thenable': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-module': 'off',
        'vue/one-component-per-file': 'off',
        'vue/require-name-property': 'off',
        'vue/require-prop-types': 'off',
      },
    },
    // histoire
    {
      files: ['**/*.story.vue'],
      rules: {
        'no-magic-numbers': 'off',
        'vue/no-undef-components': 'off',
        'vue/v-on-handler-style': 'off',
      },
    },
    // vite auto component
    {
      files: ['**/components.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
    {
      // js
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['.eslintrc.js'],
      rules: {'no-magic-numbers': 'off'},
    },
    {
      // vue
      files: ['**/*.vue'],
      rules: {'@typescript-eslint/no-unused-vars': 'off'},
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    jsx: true,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    useJSXTextNode: true,
  },
  plugins: [
    'functional',
    'prettier',
    'import',
    'sort-keys-fix',
    'typescript-sort-keys',
    'sort-export-all',
  ],
  root: true,
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
        selector: 'variable',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'function',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        selector: 'classProperty',
      },
      {
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
        selector: 'typeProperty',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'classMethod',
      },
      {
        filter: {
          match: false,
          // kebab-case & abcDe:abcDe
          regex: '^([a-z][a-zA-Z0-9]*)([-:][a-zA-Z0-9]+)*$',
        },
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'objectLiteralMethod',
      },
      {
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'class',
      },
      {
        format: ['PascalCase'],
        selector: 'interface',
      },
      {
        format: ['PascalCase'],
        selector: 'typeAlias',
      },
      {
        format: ['PascalCase'],
        selector: 'typeParameter',
      },
      {
        format: ['PascalCase'],
        selector: 'enum',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_+$',
        ignoreRestSiblings: true,
      },
    ],
    'accessor-pairs': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    camelcase: [
      'error',
      {
        ignoreGlobals: true,
        ignoreImports: true,
        properties: 'always',
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    complexity: 'error',
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'off',
    'consistent-this': 'error',
    curly: 'error',
    'default-case': 'off',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'smart'],
    'func-call-spacing': ['error', 'never'],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': 'off',
    'generator-star-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'grouped-accessor-pairs': 'error',
    'id-length': [
      'error',
      {
        exceptions: ['_', 'x', 'y', 'z', 'p', 'm', 'h', 'w', 'b', 't', 'l', 'r'],
      },
    ],
    'import/named': 'off',
    'import/no-absolute-path': 'off',
    'import/no-unresolved': 'off',
    indent: 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          catch: {after: true},
          for: {after: true},
          if: {after: true},
          switch: {after: true},
          while: {after: true},
        },
      },
    ],
    'line-comment-position': ['warn', {position: 'above'}],
    // 'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': 'error',

    'max-depth': ['error', {max: 4}],

    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],

    'max-lines': ['error', 600],
    'max-lines-per-function': [
      'error',
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': ['error', {max: 3}],
    'max-params': ['error', {max: 5}],
    'max-statements': ['error', {max: 30}],
    'max-statements-per-line': ['error', {max: 2}],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    // typescript decoration error
    // 'new-cap': 'error',
    'no-confusing-arrow': 'warn',
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        allow: ['info', 'warn'],
      },
    ],
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'warn',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'warn',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': [
      'warn',
      {
        ignore: [1, -1, 0, 2],
        ignoreArrayIndexes: true,
      },
    ],
    // todo 프리터어 때문에 끔 (출동)
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-negated-condition': 'error',
    // 'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-properties': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'warn',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'warn',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['warn', 'always'],
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'prettier/prettier': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    'require-unicode-regexp': 'error',
    'rest-spread-spacing': 'error',
    semi: ['error', 'never'],
    'sort-export-all/sort-export-all': 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys-fix/sort-keys-fix': ['warn', 'asc', {natural: true}],
    'space-before-blocks': [
      'error',
      {
        classes: 'always',
        functions: 'always',
        keywords: 'always',
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': [
      'error',
      {
        after: true,
      },
    ],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/import-style': 'off',
    'unicorn/new-for-builtins': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/prefer-export-from': 'warn',
    'unicorn/prefer-module': 'warn',
    'unicorn/prefer-node-protocol': 'warn',
    'unicorn/prefer-ternary': 'off',
    // vite-plugin-top-level-await 가 오류가 있어서 사용 불가
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          arg: false,
          args: false,
          attr: false,
          attrs: false,
          b: false,
          bb: false,
          bg: false,
          bl: false,
          br: false,
          bt: false,
          css: false,
          cssProp: false,
          dev: false,
          dir: false,
          env: false,
          func: false,
          funcs: false,
          m: false,
          mb: false,
          ml: false,
          mr: false,
          mt: false,
          mx: false,
          my: false,
          p: false,
          params: false,
          pb: false,
          pl: false,
          pr: false,
          prev: false,
          prop: false,
          props: false,
          pt: false,
          px: false,
          py: false,
          r: false,
          ref: false,
          refs: false,
          src: false,
        },
      },
    ],
    'vue/block-lang': [
      'warn',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/block-tag-newline': 'warn',
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
    'vue/component-options-name-casing': ['warn', 'PascalCase'],
    'vue/custom-event-name-casing': ['warn', 'kebab-case'],
    'vue/define-macros-order': 'warn',
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': [
      'warn',
      'never',
      {
        exceptions: ['suppress CssUnusedSymbol'],
      },
    ],
    'vue/html-comment-indent': 'warn',
    'vue/match-component-file-name': [
      'off',
      {
        extensions: ['ts', 'tsx'],
        shouldMatchCase: true,
      },
    ],
    'vue/match-component-import-name': 'warn',
    'vue/multi-word-component-names': 'off',
    // 임시 스킵
    'vue/multiline-ternary': 'off',
    'vue/next-tick-style': ['warn', 'callback'],
    'vue/no-duplicate-attr-inheritance': 'warn',
    'vue/no-empty-component-block': 'warn',
    'vue/no-extra-parens': 'warn',
    'vue/no-irregular-whitespace': 'warn',
    'vue/no-multiple-objects-in-class': 'warn',
    'vue/no-restricted-component-options': 'error',
    'vue/no-restricted-custom-event': 'warn',
    'vue/no-restricted-syntax': 'error',
    'vue/no-template-target-blank': 'warn',
    'vue/no-undef-components': [
      'warn',
      {
        ignorePatterns: ['q(\\-\\w+)+', 'nuxt(\\-\\w+)+'],
      },
    ],
    'vue/no-undef-properties': 'off',
    'vue/no-unused-refs': 'warn',
    'vue/no-useless-v-bind': 'warn',
    'vue/no-v-text': 'error',
    'vue/order-in-components': 'off',
    'vue/prefer-true-attribute-shorthand': 'warn',
    'vue/require-default-prop': 'off',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'warn',
    'vue/require-prop-types': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/script-indent': [
      'warn',
      2,
      {
        baseIndent: 1,
        switchCase: 1,
      },
    ],
    'vue/static-class-names-order': 'warn',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-handler-style': 'warn',
    'wrap-iife': 'error',
    'yield-star-spacing': ['error', 'before'],
    yoda: 'error',
  },
  settings: {
    'import/parsers': {'@typescript-eslint/parser': ['.ts', '.tsx', 'vue']},
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json', 'packages/*/tsconfig.json', 'apps/*/tsconfig.json'],
      },
    },
  },
}
