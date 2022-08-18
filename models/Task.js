// require mongoose instance
const mongoose = require('mongoose');

// create a schema for Task
const taskSchema = new mongoose.Schema({
    desc : {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: "no-category"
    },
    date: {
        type: Date
    }
});

// define a model for task
const Task = mongoose.model('Task', taskSchema);

// export this model to be used in other js files
module.exports = Task;
