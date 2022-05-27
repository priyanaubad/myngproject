import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './My component/todos/todos.component';
import { TodosItemComponent } from './mycomponents/todos-item/todos-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
