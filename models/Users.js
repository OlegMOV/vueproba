const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
  name: { type: String, require: true },
  surname: { type: String, default: 'not indicated' },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  privilege: { type: Number, default: 0 }
})

module.exports = model('User', userSchema)