import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }  from '@angular/http';

import { AppComponent }  from './app.component';
import { TaskService }  from './task.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers :   [ TaskService ]
})
export class AppModule { }
