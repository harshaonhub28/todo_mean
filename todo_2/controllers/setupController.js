
var Tasks= require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setup',function(req,res){
    var starterTodos = [
      {
        username : 'test',
        task : 'fuck',
        isDone : false
      },
      {
        username : 'test',
        task : 'this',
        isDone : false
      },
      {
        username : 'test',
        task : 'shit',
        isDone : false
      }
    ]

    Tasks.create(starterTodos, function (err,results) {
      if(err) throw err;
      res.send(results);
    })

  });
}
