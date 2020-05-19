
var express = require('express');
var router = express.Router();
var messageCtrl = require('../controller/message-controller');


// var mongoose = require('mongoose');
// var Timestamp = require('../models/timestamp.js');

/* Get all messages */
router.get('/', messageCtrl.getMessages);
/* get a message by id */
router.get('/:id',messageCtrl.getMessage);
/* get by name and return with message and name */
router.get('/name/:name', messageCtrl.getMessageByName);
/* crate a message */
router.post('/',messageCtrl.createMessage);


module.exports = router;



