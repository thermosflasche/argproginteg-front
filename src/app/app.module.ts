import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RaizComponent } from './raiz/raiz.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InterceptorService } from './interceptor.service';
import { EstudiosComponent } from './estudios/estudios.component';
import { SobreMiComponent } from './sobremi/sobremi.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PortfolioPadreComponent } from './portfolio-padre/portfolio-padre.component';

@NgModule({
  declarations: [
    RaizComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    EstudiosComponent,
    SobreMiComponent,
    ContactoComponent,
    PortfolioPadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [
    RaizComponent
  ]
})
export class AppModule { }
