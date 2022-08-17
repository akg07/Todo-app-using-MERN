const express = require('express');
const port = 8000;

const app = express();

// use routers
app.use('/', require('./routes'));

// set ejs view engine



app.listen(port, (err) => {
    if(err) {
        console.log(`err: ${err}`);
    }

    console.log(`server running on port: ${port}`);
})