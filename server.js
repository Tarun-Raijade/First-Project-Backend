const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000,()=>{
    console.log('Server started')
});

