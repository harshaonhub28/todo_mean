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
var task_service_1 = require('./task.service');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.name = 'Todo';
        this.tasks = [];
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
        console.log('yay!');
    };
    ;
    AppComponent.prototype.add = function (task) {
        var _this = this;
        if (!task) {
            return;
        }
        ;
        this.taskService.addTask(task).then(function (task) { return _this.tasks.push(task); });
    };
    ;
    AppComponent.prototype.delete = function (task) {
        var _this = this;
        this.temp = this.tasks.filter(function (t) { return t.task === task; });
        this.taskService.deleteTask(this.temp[0]._id).then(function (random) { return _this.tasks = _this.tasks.filter(function (t) { return t.task !== task; }); });
        this.temp = [];
        console.log('yaaas');
    };
    ;
    AppComponent.prototype.update = function (task) {
        var _this = this;
        for (this.i = 0; this.i < this.tasks.length && this.tasks[this.i]._id === task._id; this.i++) {
            this.index = this.i;
            break;
        }
        ;
        this.taskService.updateTask(task).then(function (updatedTask) { return _this.tasks[_this.index] = updatedTask; });
        console.log('upd yass');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map