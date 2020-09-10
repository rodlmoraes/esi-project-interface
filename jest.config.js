const { name } = require('./package.json')

module.exports = {
  displayName: name,
  name,
  clearMocks: true,
  testEnvironment: 'node',
}
