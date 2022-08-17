// Home page router

const express = require('express');
const router = express.Router();

// get home controller instance
const homeController = require('../controllers/home_controller');

// for test: may be removed
console.log("home router is loaded");


router.get('/', homeController.home)


module.exports = router;