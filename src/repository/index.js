const repository = require('node-mongoose-repository')
const schema = require('./schema')

const getTableName = modelName => `musii-${modelName}`.toLowerCase()

module.exports = () => repository.map('User', getTableName('User'), schema)