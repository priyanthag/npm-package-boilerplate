module.exports = {
  verbose: false,
  notify: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['<rootDir>/**/+(*.)+(test|spec).+(ts|js)?(x)'],
  collectCoverage: false,
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
  transform: { '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest' },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: ['js', 'json']
}
