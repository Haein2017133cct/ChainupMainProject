var mongoose = require('mongoose');
var MSG = require('../models/timestamp.js');


/* Get all Messages */
exports.getMessages = function(req, res, next) {
  MSG.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
};
/* get a Message by id */
exports.getMessage =  function(req, res, next) {
  MSG.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

/* get by name and return with all fields */
exports.getMessageByName = function(req, res){
  MSG.find({name: req.params.name}, {},  function(err, messages){
        if(err) return res.status(500).json({error: err});
        if(messages.length === 0) return res.status(404).json({error: 'message not found'});
        res.json(messages);
    })
  };

/* create a book */
exports.createMessage = function(req, res, next) {
  MSG.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

// /* update a book */
// exports.updateBooks = function(req, res, next) {
//   MSG.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// };

// /* delete a book */
// exports.deleteBooks =function(req, res, next) {
//   MSG.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// };


