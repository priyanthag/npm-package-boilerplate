module.exports = {
  verbose: true,
  notify: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['<rootDir>/**/__tests__/+(*.)+(test|spec).+(ts|js)?(x)'],
  testPathIgnorePatterns: ['<rootDir>/tests-e2e/*', '<rootDir>/tests-integration/*'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest'
  },
  collectCoverage: true,
  coverageDirectory: './reporting/code-coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: ['js', 'json']
}
