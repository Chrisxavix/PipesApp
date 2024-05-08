import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    BrowserAnimationsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
