import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LanguagePage } from './language';
import { LanguagePageRoutingModule } from './language-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LanguagePageRoutingModule
  ],
  declarations: [
    LanguagePage,
  ]
})
export class LanguageModule { }
