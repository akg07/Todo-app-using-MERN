const Task = require('../models/Task');

module.exports.getList = function(req, res) {
    
    Task.find({}, function(err, tasks) {
        if(err) {
            console.log('error at fetching tasks');
        }
        // for(let task in tasks) {
        //     console.log('date: ', task.date);
        //     let date = task.date;
        //     let dateSpliced = date.slice(4, 15);
        //     task.date == dateSpliced;
        // }


        return res.render('home', {
            task_list: tasks
        });
    });
}

module.exports.addTask = function(req, res) {

    console.log(new Date(req.body.date).toUTCString().slice(5, 16));

    Task.create({
        desc: req.body.desc,
        date: new Date(req.body.date).toUTCString().slice(5, 16),
        category: req.body.category
    },function(err, newTask){
        if(err) {
            console.log('error while adding task in db');
        }

        console.log("************", newTask);

        return res.redirect('back');
    });

}

// delete task or tasks which is check or completed
module.exports.deleteTask = function(req, res) {
    const id = req.body.id;
    // if user didn't checked any task
    if(id == undefined) {
        console.log("user did not completed any task yet!!!");
        
        return res.redirect('back');
    }else if(typeof(id) == 'string') {
        // if there are only one task need to be deleted
        Task.findByIdAndDelete(id, function(err){
            
            if(err) {
                console.log('HomeController :: error while deleting the task');
                return;
            }

            return res.redirect('back');
        });
    }else {
        // if there are multiple tasks which is completed
        for(let task of req.body.id) {
            Task.findByIdAndDelete(task, function(err){
            
                if(err) {
                    console.log('HomeController :: error while deleting the task');
                    return;
                }
            });    
        }
        return res.redirect('back');

    }
}