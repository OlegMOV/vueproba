const mongoose = require('mongoose')
const { model, Schema } = mongoose

let schemaGroup = new Schema({
  name: { type: String, required: true },
  comment: { type: String, default: '' }
})

module.exports = model('Group', schemaGroup)