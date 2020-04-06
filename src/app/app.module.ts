import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpMeComponent } from './help-me/help-me.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HelpMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
