let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let VoteSchemaModel = {
    userId: { type: ObjectId, ref: 'User', required: true },
    threadId: { type: ObjectId, ref: 'Thread' },
    commentId: { type: ObjectId, ref: 'Comment' },
    count: { type: Number }
}

let schema = new Schema(VoteSchemaModel)
let VoteModel = mongoose.model('Vote', schema)

module.exports = VoteModel
