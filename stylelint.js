/**
 * Stylelint Configuration File
 * https://stylelint.io/user-guide/configuration
 *
 * Plugins:
 * stylelint-scss - https://github.com/kristerkari/stylelint-scss
 * stylelint-prettier - https://github.com/prettier/stylelint-prettier
 *
 * Configurations:
 * stylelint-config-recommended - https://github.com/stylelint/stylelint-config-recommended
 * stylelint-config-sass-guidelines - https://github.com/bjankord/stylelint-config-sass-guidelines
 * stylelint-prettier/recommended - https://github.com/prettier/stylelint-prettier#recommended-configuration
 * stylelint-config-recommended-vue/scss - https://github.com/ota-meshi/stylelint-config-recommended-vue
 *
 */
module.exports = {
    ignoreFiles: ['**/*.js'],
    plugins: ['stylelint-scss', 'stylelint-prettier'],
    overrides: [
        {
            files: ['**/*.{vue}'],
            customSyntax: 'postcss-html',
        },
        {
            files: ['**/*.{scss}'],
            customSyntax: 'postcss-scss',
        },
    ],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-sass-guidelines',
        'stylelint-prettier/recommended',
        'stylelint-config-recommended-vue/scss',
    ],
    rules: {
        'prettier/prettier': true,
        // http://stylelint.io/user-guide/rules/max-nesting-depth#max-nesting-depth
        'max-nesting-depth': 10,
        // https://stylelint.io/user-guide/rules/selector-max-compound-selectors
        'selector-max-compound-selectors': 10,
        // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md
        'scss/at-import-no-partial-leading-underscore': null,
        // https://medium.com/takeaway-tech/the-search-for-a-regex-to-match-hyphenated-bem-css-class-names-5f8b66cc2bd9
        'selector-class-pattern':
            // eslint-disable-next-line max-len
            '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
    },
};
