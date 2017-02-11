let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let ThreadSchemaModel = {
    // Data
    name: { type: String, required: true },
    text: {type: String, required: true},
    votes: { type: Object },
    tags: { type: Array },
    favorite: { type: Boolean },
    created: { type: Date, default: Date.now().toString() },
    // Relations
    userId: { type: String, ref: 'User', required: true },
    icon: { type: String, default: "folder" }

}

let schema = new Schema(ThreadSchemaModel)
let ThreadModel = mongoose.model('Thread', schema)

module.exports = ThreadModel
