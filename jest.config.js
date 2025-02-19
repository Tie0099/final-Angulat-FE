module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      isolatedModules: true
    }
  },
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx)'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.module.ts',
    '!src/app/**/*.spec.ts'
  ],
  testEnvironment: 'jsdom',
  verbose: true
};
