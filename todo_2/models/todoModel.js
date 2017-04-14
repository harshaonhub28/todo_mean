var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema({
  username: String,
  task: String,
  isDone : Boolean
});

var TaskModel = mongoose.model('Task',taskSchema);

module.exports = TaskModel;
