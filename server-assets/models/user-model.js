let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let UserSchemaModel = {
    // Data
    name: { type: String, required: true },
    password: { type: String, required: true },
    upvotes: { type: Number },
    downvotes: { type: Number },
    created: { type: Number },
    // Relations
    threads: [{ type: ObjectId, ref: 'Thread' }],
    comments: [{ type: ObjectId, ref: 'Comment' }]

}

let schema = new Schema(UserSchemaModel)
let UserModel = mongoose.model('User', schema)

module.exports = UserModel
