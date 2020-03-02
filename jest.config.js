module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!lodash-es)'
  ],
  transform: { '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest' },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/logs/**',
    '!**/bin/**',
    '!*.config.js'
  ],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    './node_modules/',
    './logs/',
    './bin/',
    './coverage/'
  ]
}
