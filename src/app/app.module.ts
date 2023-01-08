import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './modal/modal.component';
import { RaizComponent } from './raiz/raiz.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InterceptorService } from './interceptor.service';
import { ModalService } from './modal.service';
import { AutenticacionService } from './autenticacion.service';
import { ApiService } from './api.service';
import { EstudiosComponent } from './estudios/estudios.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    ModalComponent,
    RaizComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    EstudiosComponent,
    SobremiComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [
    RaizComponent
  ]
})
export class AppModule { }
