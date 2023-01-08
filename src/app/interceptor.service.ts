import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionServicio:AutenticacionService) { }

  intercept(peticion: HttpRequest<any>, siguiente:HttpHandler):Observable<HttpEvent<any>>{
    var token=this.autenticacionServicio.token;
    if (token){
      peticion=peticion.clone({
        setHeaders:{
          Authorization: token
        }
      })
    }

    return siguiente.handle(peticion);
  }
}
