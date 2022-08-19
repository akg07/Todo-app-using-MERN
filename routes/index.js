// Home page router

const express = require('express');
const router = express.Router();

// get home controller instance
const homeController = require('../controllers/home_controller');

router.use(express.urlencoded({extended: true}));

// for test: may be removed
console.log("home router is loaded");

// home page - get List of all tasks
router.get('/', homeController.getList)

// add task
router.post('/add-task', homeController.addTask);

// delete task
router.post('/delete-tasks', homeController.deleteTask);

module.exports = router;