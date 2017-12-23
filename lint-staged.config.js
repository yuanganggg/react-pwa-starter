/**
 * @description - lint-staged configuration
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

module.exports = {
  'src/**/*.js': [
    'eslint --fix',
    'git add'
  ],
  'src/**/*.css': [
    'stylelint --fix',
    'git add'
  ],
  '__tests__/**/*.js': [
    'eslint --fix',
    'git add'
  ],
  '*.js': [
    'eslint --fix',
    'git add'
  ]
};
