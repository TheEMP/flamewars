let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let CommentSchemaModel = {
    // Data
    name: { type: String, required: true },
    upvotes: { type: ObjectId, ref: 'Upvote' },
    downvotes: { type: ObjectId, ref: 'Downvote' },
    // Relations
    userId: {type: String, ref: 'User', required: true},
    threadId: {type: String, ref: 'Thread', required: true},
    comments: [{ type: ObjectId, ref: 'Comment' }]

}

let schema = new Schema(CommentSchemaModel)
let CommentModel = mongoose.model('Comment', schema)

module.exports = CommentModel
