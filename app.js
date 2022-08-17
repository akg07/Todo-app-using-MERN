const express = require('express');
const port = 8000;

const app = express();

// use routers
app.use('/', require('./routes'));

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