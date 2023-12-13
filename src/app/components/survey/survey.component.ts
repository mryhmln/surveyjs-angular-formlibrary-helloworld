import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Model } from 'survey-core';
import { SurveyModule } from "survey-angular-ui";
import { IDocOptions, SurveyPDF } from "survey-pdf";
import { surveyJson } from '../../../assets/pilot.survey.json';
import { themeJson } from '../../../assets/pilot.theme.json';
import "./survey.component.css";
import "survey-core/defaultV2.min.css";
import { Converter } from "showdown";
import { HeaderComponent } from '../header/header.component';
import "survey-core/survey.i18n";

const pdfDocOptions: IDocOptions = { /* ... */ };

const converter = new Converter();

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [
    SurveyModule,
    HeaderComponent
  ],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})

export class SurveyComponent implements OnInit  {

  @Input() locale!: string;

  surveyModel!: Model;

  savePdf (sender: { data: any; }) {
    const surveyPdf = new SurveyPDF(surveyJson, pdfDocOptions);
    surveyPdf.mode = "display"; //read-only
    surveyPdf.data = sender.data;
    surveyPdf.save();
  };

  doMarkdown(survey: any, options: any) {
    var str = converter.makeHtml(options.text);
    // remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // set html
    options.html = str;
  };

  alertResults (sender: { data: any; }) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    const survey = new Model(surveyJson);
    survey.locale = this.locale;
    survey.onTextMarkdown.add(this.doMarkdown);
    survey.applyTheme(themeJson);
    this.surveyModel = survey;
    //survey.onComplete.add(this.alertResults);
    survey.onComplete.add(this.savePdf);
    console.log("changes:" + changes['locale'].currentValue);
  }

}

