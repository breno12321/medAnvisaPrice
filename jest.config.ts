/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  // All imported modules in your tests should be mocked automatically
  automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  preset: 'ts-jest',

  transformIgnorePatterns: [
    '/node_modules/',
  ],

  collectCoverageFrom: ['src/**/*.{ts,js}'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    // 'src/index.js',
    '/__test__/*',
  ],

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  roots: [
    'src',
  ],

  testEnvironment: 'node',

  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],

};
