const express = require('express');
const routers = require('./modules/signup/routes/signup.server.routes')
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    preflightContinue: false,
};
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

routers(app)
module.exports = app;