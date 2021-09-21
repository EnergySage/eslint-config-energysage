# eslint-config-energysage

#### An ESLint/Prettier/Stylelint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) For [EnergySage](https://www.energysage.com) Projects

This package provides EnergySage's base ESLint, Prettier & Stylelint rule bases.

## Usage

1. Install the correct versions of each peer package, which are listed by the command:
```sh
npm info "eslint-config-energysage@latest" peerDependencies
```
And they can be installed using this command:
```sh
npx install-peerdeps --dev eslint-config-energysage
```
2. Install the latest version of our package
```sh
npm install --dev eslint-config-energysage@latest
```
3. Update/Create your `.eslintrc.js` file, ensure there are no duplicate plugin/config entries
```js
    module.exports = {
        extends: ['eslint-config-energysage'],
        rules: {
            // Disable/Enable any custom rules for your project
        },
    };
```
4. Update your `package.json` file, ensure there is no `.prettierrc` file
```json
    "prettier": "eslint-config-energysage/prettier",
    "scripts": {}
```
5. Update/Create your `stylelint.config.js` file, ensure there are no duplicate plugin/config entries
```js
    module.exports = {
        extends: ['eslint-config-energysage/stylelint'],
        rules: {
            // Disable/Enable any custom rules for your project
        },
    };
```
