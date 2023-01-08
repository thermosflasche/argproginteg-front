import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="http://127.0.0.1:8080/login"
  usuarioSujeto:BehaviorSubject<string>;
  constructor(private cliente:HttpClient) {
    this.usuarioSujeto = new BehaviorSubject<string>(localStorage.getItem("u")||'');
  }

  // Retornar observable de la respuesta de la petición POST a la API,
  // con el fin de recibir de ella la cabecera "Authorization" con el JWT.
  login(credenciales:any):Observable<any> {
    return this.cliente.post(this.url,credenciales, {observe: 'response'});
  }

  get token(){
    return this.usuarioSujeto.value;
  }
}
