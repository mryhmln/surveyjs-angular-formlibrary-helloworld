import { Component, Input } from '@angular/core';
import { Model, ITheme } from 'survey-core';
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

export class SurveyComponent  {

  @Input() locale!: string;

  surveyModel!: Model;

  savePdf (sender: { data: any; }) {
    console.log('savePdf start');

    const surveyPdf = new SurveyPDF(surveyJson, pdfDocOptions);
    surveyPdf.mode = "display"; //read-only

    sender.data.locale = this.locale;
/*
    sender.data.onTextMarkdown.add(this.doMarkdown);
    sender.data.applyTheme(themeJson);
  */

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

  ngOnChanges() {
    const survey = new Model(surveyJson);

    //set the current locale
    survey.locale = this.locale;
    console.log('ngOnChanges: locale='+ survey.locale);

    //set the markdown renderer
    survey.onTextMarkdown.add(this.doMarkdown);

    const theme: ITheme = themeJson as ITheme;
    survey.applyTheme(theme);

    this.surveyModel = survey;
    survey.onComplete.add(this.savePdf);
  }

    /*
  uploadFiles(_: any, options: { files: any[]; }) {
      const formData = new FormData();
      options.files.forEach((file) => {
          formData.append(file.name, file);
      });
                  fetch("https://api.surveyjs.io/private/Surveys/uploadTempFiles", {
                method: "POST",
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    options.callback(
                        "success",
                        options.files.map((file) => {
                            return {
                                file: file,
                                content: "https://api.surveyjs.io/private/Surveys/getTempFile?name=" + data[file.name]
                            };
                        })
                    );
                })
                .catch((error) => {
                    console.error("Error: ", error);
                    options.callback("error");
                });
  }
*/


}

