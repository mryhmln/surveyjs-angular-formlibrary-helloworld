// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SurveyModule } from "survey-angular-ui";

import { AppComponent }  from "./app.component";
import { SurveyComponent } from './components/survey.component';

@NgModule({
  declarations: [
    AppComponent
    ,SurveyComponent
  ],
  imports: [
    BrowserModule,
    SurveyModule
  ],
  exports: [
//    SurveyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
