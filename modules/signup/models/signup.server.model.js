var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var signUpSchema = new mongoose.Schema({

    firstName: {
        type: String
    }, 
    lastName: {
        type: String
    },
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    // createdBy: {
    //     type: Schema.ObjectId,
    //     ref: 'User'
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const signUp = mongoose.model('user', signUpSchema)
module.exports = signUp