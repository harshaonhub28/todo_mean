import { Injectable } from '@angular/core';
import { Task } from './Task';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()

export class TaskService {

  constructor (private http: Http ) {}

  private url = '/api/task';
  private headers = new Headers ({'Content-Type' : 'application/json'});

  getTasks() : Promise<Task[]> {
    return this.http.get(this.url+'s/test').toPromise()
                                            .then(response => JSON.parse(response._body) as Task[] )
                                            .catch(this.handleError);
  };

  private handleError(error:any) {
    console.log('faaak');
    return Promise.reject(error.message || error);
  };

  addTask(task : String) : Promise<Task[]> {
    return this.http.post(this.url, JSON.stringify({task : task}), {headers : this.headers})
                    .toPromise()
                    .then(response => JSON.parse(response._body) as Task[])
                    .catch(this.handleError);
  };

  deleteTask(id :String) : Promise<Task[]> {
    return this.http.delete(this.url+`/${id}`, {headers: this.headers})
                    .toPromise()
                    .then(response => JSON.parse(response._body) as Task[])
                    .catch(this.handleError);
  };

  updateTask(task: Task) : Promise<Task[]> {
    return this.http.post(this.url, JSON.stringify({id : task._id, task : task.task}), {headers : this.headers})
                    .toPromise()
                    .then(response => JSON.parse(response._body) as Task[])
                    .catch(this.handleError);
  }


}
