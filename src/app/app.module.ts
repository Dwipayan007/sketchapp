import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DrawComponentComponent } from './Components/draw-component/draw-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
