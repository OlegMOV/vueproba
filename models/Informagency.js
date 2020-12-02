const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    domain: { type: String, required: true, unique: true },
    owner: { type: String, enum: ['ua', 'ru', 'pl', 'us'], default: 'ua' }

})

module.exports = model('Informagency', schema)