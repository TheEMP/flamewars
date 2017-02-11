let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let CommentSchemaModel = {
    // Data
    name: { type: String, required: true },
    votes: [{ type: ObjectId, ref: 'Vote' }],
    created: { type: Date, default: Date.now() },
    // Relations
    userId: {type: String, ref: 'User', required: true},
    threadId: {type: String, ref: 'Thread', required: true},
    comments: [{ type: ObjectId, ref: 'Comment' }]

}

let schema = new Schema(CommentSchemaModel)
let CommentModel = mongoose.model('Comment', schema)

module.exports = CommentModel
