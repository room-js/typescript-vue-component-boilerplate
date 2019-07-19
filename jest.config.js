module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  transform: {
    '^.*(ts|tsx)$': 'ts-jest',
    '^.*\\.vue$': 'vue-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(bootstrap-vue)/)',
    '<rootDir>/lib',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
  ],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  moduleFileExtensions: ['vue', 'ts', 'tsx', 'js'],
  snapshotSerializers: ["jest-serializer-vue"],
};