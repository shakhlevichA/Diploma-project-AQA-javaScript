/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  testTimeout: 30000,
  setupFilesAfterEnv: ["jest-allure/dist/setup"],
  testRunner: "jest-jasmine2"
};