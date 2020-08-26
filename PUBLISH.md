# Publishing to NPM
To publish to npm we use the [np](https://github.com/sindresorhus/np) tool. You must first install it and ensure you are logged into npm and are part of the EnergySage organization on [npmjs.org](https://www.npmjs.com/).

```console
$ npm login
$ npm install -g np
$ np
```

Your first prompt will be asking for the next [semver](https://docs.npmjs.com/about-semantic-versioning). Please read the link to determine what the next appropriate version bump should be. It will next run `npm test` and ensure all tests have passed. Note: You may need to run `npm install` yourself should the tests fail.

If the tests pass it will publish the new package to npm under [eslint-config-energysage](https://www.npmjs.com/package/eslint-config-energysage). It will then open a new browser window in github. Here you will be presented with the prefilled tag number(semver) and the description which should contain the commits which are new to this release. Click `Save` to create the new tag. Note: You may need to be logged into github first or you may not get this view. You may still manually create the tag later.
