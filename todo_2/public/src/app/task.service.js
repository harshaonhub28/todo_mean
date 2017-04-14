"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.url = '/api/task';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.url + 's/test').toPromise()
            .then(function (response) { return JSON.parse(response._body); })
            .catch(this.handleError);
    };
    ;
    TaskService.prototype.handleError = function (error) {
        console.log('faaak');
        return Promise.reject(error.message || error);
    };
    ;
    TaskService.prototype.addTask = function (task) {
        return this.http.post(this.url, JSON.stringify({ task: task }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return JSON.parse(response._body); })
            .catch(this.handleError);
    };
    ;
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete(this.url + ("/" + id), { headers: this.headers })
            .toPromise()
            .then(function (response) { return JSON.parse(response._body); })
            .catch(this.handleError);
    };
    ;
    TaskService.prototype.updateTask = function (task) {
        return this.http.post(this.url, JSON.stringify({ id: task._id, task: task.task }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return JSON.parse(response._body); })
            .catch(this.handleError);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map