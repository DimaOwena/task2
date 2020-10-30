var router = require('express').Router();
var controller = require('./controller/tasks.js')
//var controller = require('/controller')
//var controller = require('controller')
//var controller = require('../controller')
router.get('/tasks', controller.get)
router.post('/tasks', controller.post)

module.exports = router;