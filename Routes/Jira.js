/*jshint esversion: 6 */
let express = require('express');
let router = express.Router();
let jiraController = require('../Controllers/JiraController');

router.post('/login',jiraController.jiraLogin);

module.exports = router;