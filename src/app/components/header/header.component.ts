import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() localeChanged = new EventEmitter<string>();

 changeLocale(locale: string) {
  //console.log(locale);
  this.localeChanged.emit(locale);
 }

}
