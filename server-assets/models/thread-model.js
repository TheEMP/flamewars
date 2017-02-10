let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let ThreadSchemaModel = {
    // Data
    name: { type: String, required: true },
    upvotes: { type: Number },
    downvotes: { type: Number },
    tags: { type: Array },
    favorite: { type: Boolean },
    // Relations
    userId: { type: String, ref: 'User', required: true },
    comments: [{ type: ObjectId, ref: 'Comment' }]

}

let schema = new Schema(ThreadSchemaModel)
let ThreadModel = mongoose.model('Thread', schema)

module.exports = ThreadModel
