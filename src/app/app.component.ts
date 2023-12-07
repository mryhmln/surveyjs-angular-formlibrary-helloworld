/*
import { Component, OnInit } from '@angular/core';
import { Model } from 'survey-core';
import "survey-core/defaultV2.min.css";

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

@Component({
   // standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent implements OnInit  {

  surveyModel!: Model;

  alertResults (sender: { data: any; }) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }

  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    survey.onComplete.add(this.alertResults);
  }

}*/


import { Component } from '@angular/core';
import { SurveyComponent } from './components/survey.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SurveyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {

  title = 'My First Survey';

}



