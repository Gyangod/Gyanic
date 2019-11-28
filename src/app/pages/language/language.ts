import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
  styleUrls: ['./language.scss'],
})
export class LanguagePage {

  private currentLanguage: string; 

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    if (localStorage.getItem("selectedLanguage") === null) {
      this.currentLanguage = "en";
      translate.use(localStorage.getItem("en"));
    } else {
      this.currentLanguage = localStorage.getItem("selectedLanguage");
      translate.use(localStorage.getItem("selectedLanguage"));
    }
  }

  setLanguage(language: string) {
      localStorage.setItem("selectedLanguage", language);
      this.translate.use(language);
  }
}