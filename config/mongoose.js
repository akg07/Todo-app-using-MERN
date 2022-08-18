// require mongoose
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost/todo_list_db');

// accquire the connection to check if it is connected sucessfully
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to the database todo_list_db'));

// up and running then print the message
db.once('open', ()=> {
    console.log('successfully connected to the DB');
});