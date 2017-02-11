let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT_FACTOR = 10

let UserSchemaModel = {
    // Data
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    votes: [{ type: ObjectId, ref: 'Vote' }],
    created: { type: Date, default: Date.now() },
    // Relations
    threads: [{ type: ObjectId, ref: 'Thread' }],
    comments: [{ type: ObjectId, ref: 'Comment' }]

}

let schema = new Schema(UserSchemaModel)


schema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) {
            return next(err);
        } else {
            bcrypt.hash(user.password, salt, function (err, hash) {
                user.password = hash;
                next();
            });
        }
    });
});

schema.methods.validatePassword = function (password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, function (err, isMatch) {
            if (err || !isMatch) {
                return reject(err);
            }
            return resolve(isMatch);
        });
    })
};




let UserModel = mongoose.model('User', schema)
module.exports = UserModel