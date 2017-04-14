var Tasks = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true}));

  app.get('/api/tasks/:user',function(req,res){
    var username = req.params.user;
    Tasks.find({username : username} , function(err, tasks){
      if(err) throw err;
      res.send(tasks);
    });
  });

  app.get('/api/task/:id', function(req,res){
    var id = req.params.id;
    Tasks.findById(id, function(err,todo){
      if(err) throw err;
      res.send(todo);
    });
  });

  app.post('/api/task', function(req,res){
    if(req.body.id){

      Tasks.findByIdAndUpdate(req.body.id, {
        task : req.body.task,
        isDone : req.body.isDone
      }, function(err,todo){
        if(err) throw err;
        res.send(todo);
      });

    } else {

      var newTask = {
        username : 'test',
        task : req.body.task,
        isDone : req.body.isDone
      };

      Tasks.create(newTask, function(err, task) {
        if(err) throw err;
        res.send(task);
      });

    }
  });

  app.delete('/api/task/:id',function(req,res){
    var id = req.params.id;
    Tasks.findByIdAndRemove(id, function(err,task){
      if(err) throw err;
      res.send(task);
    })
  })
}
