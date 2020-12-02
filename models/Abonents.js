const mongoose = require('mongoose')

const { Schema, model, Types } = mongoose

let schemaAbonents = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, default: '' },
  phone: { type: String, default: '' },
  avatar: { type: String, default: '' },
  group: { type: Types.ObjectId, required: true }
})

module.exports = model('Abonents', schemaAbonents)