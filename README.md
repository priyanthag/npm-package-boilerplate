# NPM Package Boilerplate

Boilerplate to create npm packages.

## Publish to NPM

### Build the Package

    npm run build

### Publish the Package

    npm publish

## Work locally

Link the package locally

    yarn add ../<this folder>

## Run unit tests

### All the unit tests with coverage

    npm run test

### Run single unit test

this can be done using command like as follows

    TZ=Etc/UTC npm run test:single -- tests-unit/__tests__/index.test.js --runTestsByPath --testNamePattern "^Test Index\stest the logger attribute of the index class$"

Or

using the vscode plugin `asvetliakov.run-current-test`. place on the single unit test you need to run, and then `command + t`

## Debug

Check the `.vscode/launch.json` for more debugging options
