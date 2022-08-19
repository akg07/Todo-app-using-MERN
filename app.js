// requried modules
const express = require('express');
const db = require('./config/mongoose');
const Task = require('./models/Task');
const bodyParser = require('body-parser');

const port = 8000;

const app = express();

// use routers
app.use(bodyParser.urlencoded({extended : false}));
app.use('/', require('./routes')); // redirect to routes directory

// set ejs view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// assets - static file using middleware
app.use(express.static('assets'));


app.listen(port, (err) => {
    if(err) {
        console.log(`err: ${err}`);
    }

    console.log(`server running on port: ${port}`);
})