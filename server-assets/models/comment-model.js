let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let CommentSchemaModel = {
    // Data
    text: { type: String, required: true },
    votes: { type: Object },
    created: { type: Date, default: Date.now() },
    // Relations
    userId: { type: String, ref: 'User', required: true },
    threadId: { type: String, ref: 'Thread' },
    commentId: { type: String, ref: 'Comments' },
    comments: [{ type: ObjectId, ref: 'Comment' }]

}

let schema = new Schema(CommentSchemaModel)
//import { createComment, CommentModel as Comments } from '../models/comment-model'
let CommentModel = mongoose.model('Comment', schema)


function createComment(comment) {
    return new Promise(function (resolve, reject) {
        try {
            if (comment.commentId || comment.threadId) {
                CommentModel.create(comment)
                    .then(resolve)
                    .catch(reject)

            } else {
                throw new Error("Comment must have commentId or threadId!!")
            }

        } catch (error) {
            reject(error)
        }
    })
}

// export default {
//     createComment,
//     CommentModel
// }
module.exports = { CommentModel: CommentModel, createComment: createComment };
