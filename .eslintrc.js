module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  plugins: [
    'import',
    'vue',
    'html',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
  },
  rules: {
    'arrow-body-style': 0,
    'camelcase': 0,
    'global-require': 0,
    'indent': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/order': 0,
    'import/extensions': 0,
    'import/first': 0,
    'linebreak-style': 0,
    'max-len': [2, {
      'code': 180
    }],
    'no-console': [1, {
      'allow': [
        'warn',
        'error'
      ]}
    ],
    'no-debugger': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-multiple-empty-lines': [2, {
      'max': 1,
      'maxBOF': 3,
      'maxEOF': 1
    }],
    'quotes': [2, 'single', {
      'allowTemplateLiterals': true,
    }],

    'vue/attributes-order': [2, {
      'order': [
        'OTHER_DIRECTIVES',
        'RENDER_MODIFIERS',
        'LIST_RENDERING',
        'CONDITIONALS',
        'TWO_WAY_BINDING',
        'DEFINITION',
        'CONTENT',
        ['OTHER_ATTR', 'EVENTS', 'UNIQUE'],
        'GLOBAL'
      ]
    }],
    'vue/attribute-hyphenation': [2, 'never', {
      'ignore': []
    }],
    'vue/html-indent': [2, 2, {
      'attribute': 0,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-closing-bracket-spacing': [2, {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never'
    }],
    'vue/html-closing-bracket-newline': [2, {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/max-attributes-per-line': [2, {
      'singleline': 3,
    }],
    'vue/no-v-html': 0,
    'vue/order-in-components': [2, {
      'order': [
        'name',
        'components',
        'mixins',
        ['props', 'propsData'],
        'ROUTER_GUARDS',
        'LIFECYCLE_HOOKS',
        'methods',
        'computed',
        'data',
        'filters',
        'watch',
      ]
    }],
    'vue/script-indent': [2, 2, {
      'baseIndent': 1,
      'switchCase': 0,
      'ignores': []
    }]
  }
};
