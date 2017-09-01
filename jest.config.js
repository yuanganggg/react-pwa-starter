/**
 * @description - jest configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

module.exports = {
  transform: {
    '\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  // Coverage report
  collectCoverageFrom: ['src/component/**/*.{js,jsx}', 'src/lib/**/*.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'html'],
  // Test configuration
  testMatch: ['**/__tests__/**/*.spec.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ]
};
