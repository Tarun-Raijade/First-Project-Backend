var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var signUpSchema = new mongoose.Schema({

    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    createdBy: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const signUp = mongoose.model('signup', signUpSchema)
module.exports = signUp