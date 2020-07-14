module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "standard",
    "prettier",
    "plugin:prettier/recommended",
    // "plugin:import/errors",
    // "plugin:import/warnings"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-unused-expressions": 2,
    "chai-friendly/no-unused-expressions": 2,
    // "module-resolver/use-alias": [2, {
    //   // "ignoreDepth": 2,
    //   // "allowDepthMoreOrLessThanEquality": false,
    //   // "projectRoot": "<rootDir>/src",
    // }],
    "prettier/prettier": "error"
  },
  plugins: [
    "module-resolver",
    "jest",
    "chai-friendly",
    "prettier"
  ],
  settings: {
    // "import/resolver": {
    //   "babel-module": {
    //     "projectRoot": "<rootDir>",
    //     "paths": []
    //   }
    // }
  }
}
