/**
 * ESLint Configuration File
 * http://eslint.org/docs/developer-guide/shareable-configs
 *
 * Plugins:
 * eslint-plugin-strict-vue - https://github.com/GlebkaF/eslint-plugin-strict-vue
 * eslint-plugin-import - https://github.com/benmosher/eslint-plugin-import
 * eslint-plugin-jest - https://github.com/jest-community/eslint-plugin-jest
 * eslint-plugin-prettier - https://github.com/prettier/eslint-plugin-prettier
 * eslint-plugin-strict-vue - https://github.com/GlebkaF/eslint-plugin-strict-vue
 * eslint-plugin-vue - https://github.com/vuejs/eslint-plugin-vue
 * eslint-plugin-vuejs-accessibility - https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility
 *
 * Configurations:
 * eslint-config-airbnb-base - https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
 * eslint-config-prettier - https://github.com/prettier/eslint-config-prettier
 */
module.exports = {
    parserOptions: {
        // https://github.com/babel/babel/tree/master/eslint/babel-eslint-parser
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    plugins: ['strict-vue', 'vuejs-accessibility'],
    extends: [
        'prettier',
        'airbnb-base',
        'plugin:vue/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:vuejs-accessibility/recommended',
    ],
    rules: {
        'linebreak-style': 'off',
        camelcase: 'off',
        'no-console': 'warn',

        // Set indents to 4 spaces everywhere
        indent: [
            'warn',
            4,
            {
                // https://github.com/babel/babel-eslint/issues/530
                ignoredNodes: ['TemplateLiteral'],
            },
        ],

        // Max length set to 119 to match PEP8
        'max-len': [
            'warn',
            {
                code: 119,
                ignorePattern: 'class=',
                ignoreUrls: true,
            },
        ],

        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/html-indent': ['warn', 4],

        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],

        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],

        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignoreWhenNoAttributes: false,
                ignoreWhenEmpty: true,
            },
        ],

        // Allow certain variables to be reassigned
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'e', // for e.returnvalue
                    'state', // for vuex state
                    'ctx', // nuxt context,
                    'jestVue', // Jest Vue Object
                ],
            },
        ],

        // Allow certain scoped variables to be used multiple times
        'no-shadow': [
            'error',
            {
                allow: ['state', 'getters', 'actions', 'mutations'],
            },
        ],

        // Dont warn about dev dependencies for files not used production
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/storybook/*',
                    '**/mocks/*',
                    '**/helpers/*',
                    '**/*.spec.js',
                    '**/*.test.js',
                    '**/*.spec.js',
                    '**/*conf*.js',
                    '**/*build*.js',
                    '**/*report*.js',
                    '**/*.story.js',
                ],
            },
        ],
        'strict-vue/require-jsdoc': 'off',
    },
};
