import { ChangeDetectorRef, Component } from '@angular/core';
import { SurveyComponent } from './components/survey/survey.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SurveyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {

  private _locale!: string;
  public get locale() { return this._locale; }
  public set locale(newValue) {
    this._locale = newValue;
  }

  changeLocale(locale: string) { 
    this.locale = locale;
  }

  title = 'My First Survey';

}



