
module.exports = function (app) {
    var signUp = require('../controllers/signup.server.controller')
    app.route('/api/signup').post(signUp.signUp)
}
