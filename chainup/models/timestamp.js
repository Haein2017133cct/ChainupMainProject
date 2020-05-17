var mongoose = require('mongoose');
var timeSchema = new mongoose.Schema({
    name: String,
    text: String,
  //  time: Date,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('message', timeSchema);
