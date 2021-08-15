module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/{components,pages,store}/*.{js,vue}'
  ],
  coverageDirectory: '<rootDir>/tests/coverage/',
  coverageReporters: [
    'html',
    'text-summary'
  ],
  clearMocks: true,
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  preset: '@vue/cli-plugin-unit-jest',
  snapshotSerializers: ['jest-serializer-vue'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).[jt]s?(x)'
  ]
}
