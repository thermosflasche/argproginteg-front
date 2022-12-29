import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './modal/modal.component';
import { RaizComponent } from './raiz/raiz.component';

@NgModule({
  declarations: [
    ModalComponent,
    RaizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    RaizComponent
  ]
})
export class AppModule { }
