let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let ThreadSchemaModel = {
    // Data
    name: { type: String, required: true },
    text: {type: String, required: true},
    votes: [{ type: ObjectId, ref: 'Vote' }],
    tags: { type: Array },
    favorite: { type: Boolean },
    created: { type: Date, default: Date.now() },
    // Relations
    userId: { type: String, ref: 'User', required: true },
    comments: [{ type: ObjectId, ref: 'Comment' }]

}

let schema = new Schema(ThreadSchemaModel)
let ThreadModel = mongoose.model('Thread', schema)

module.exports = ThreadModel
