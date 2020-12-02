const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    owner: { type: Types.ObjectId, ref: "Informagency", default: null },
    link: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    body: { type: String },
    image: [String],
    lang: { type: String, enum: ['ua', 'ru', 'en', 'pl'], default: 'ua' },
    published: { type: Date, default: Date.now },
    comment: [{ type: Types.ObjectId, ref: "Comment", defailt: null }]
})
module.exports = model("Article", schema)