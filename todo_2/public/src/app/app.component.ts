import { Component , OnInit } from '@angular/core';
import { Task } from './Task';
import { TaskService } from './task.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  name = 'Todo';

  tasks : Task[] = [];
  temp : Task[];
  index : Number;
  i     : Number;
  constructor( private taskService : TaskService) {};

  ngOnInit() : void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
    console.log('yay!')
  };

  add(task:String) {
    if(!task) {return};
    this.taskService.addTask(task).then(task => this.tasks.push(task));
  };

  delete(task: String) {
    this.temp = this.tasks.filter(t => t.task === task);
    this.taskService.deleteTask(this.temp[0]._id).then( random => this.tasks = this.tasks.filter(t => t.task!== task ));
    this.temp = [];
    console.log('yaaas');
  };

  update(task : Task) {
    for(this.i = 0;this.i < this.tasks.length && this.tasks[this.i]._id === task._id; this.i++){
      this.index = this.i;
      break;
    };
      this.taskService.updateTask(task).then(updatedTask => this.tasks[this.index] = updatedTask);
      console.log('upd yass');
    }
  };
}
