import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

/* Configuraci+on del locale de la app */
import localesEsEC from '@angular/common/locales/es-EC';
import localesFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localesEsEC);
registerLocaleData( localesFrCA);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: "es-EC" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
