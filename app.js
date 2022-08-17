const express = require('express');
const port = 8000;

const app = express();



app.listen(port, (err) => {
    if(err) {
        console.log(`err: ${err}`);
    }

    console.log(`server running on port: ${port}`);
})