const SignUp = require('../models/signup.server.model')


exports.signUp = function(req,res){
    var data = new SignUp(req.body);
    console.log("******",data)
    data.save().then(function (d,err){
        if(err)
        {
            console.error('Error while signing up');
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        else{
            console.log('Signed up successfuly')
            res.send(data)
        }
     })
}