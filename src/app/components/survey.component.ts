import { Component, OnInit } from '@angular/core';
import { Model } from 'survey-core';
import { SurveyModule } from "survey-angular-ui";
import { IDocOptions, SurveyPDF } from "survey-pdf";
import { surveyJson } from './surveyJson';
import "./survey.component.css";
import "survey-core/defaultV2.min.css";

const pdfDocOptions: IDocOptions = { /* ... */ };

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [
    SurveyModule
  ],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})

export class SurveyComponent implements OnInit  {

  surveyModel!: Model;

  savePdf (sender: { data: any; }) {
    const surveyPdf = new SurveyPDF(surveyJson, pdfDocOptions);
    surveyPdf.mode = "display"; //read-only
    surveyPdf.data = sender.data;
    surveyPdf.save();
  };

  alertResults (sender: { data: any; }) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }

  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    //survey.onComplete.add(this.alertResults);
    survey.onComplete.add(this.savePdf);
  }

}

