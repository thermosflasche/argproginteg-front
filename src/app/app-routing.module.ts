import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './autorizado.guard';
import { ContactoComponent } from './contacto/contacto.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PortfolioPadreComponent } from './portfolio-padre/portfolio-padre.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SobreMiComponent } from './sobremi/sobremi.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioPadreComponent,children:[
    {path:'estudios',component:EstudiosComponent},
    {path:'sobremi',component:SobreMiComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'',component:PortfolioComponent,pathMatch:'full'}
  ], canActivate:[() => inject(AutorizadoGuard).guardia]},
  {path:'login',component:IniciarSesionComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
