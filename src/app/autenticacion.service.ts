import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="https://argprog-backend.onrender.com/login";
  constructor(private cliente:HttpClient) {}

  // Retornar observable de la respuesta de la petición POST a la API,
  // con el fin de recibir de ella la cabecera "Authorization" con el JWT.
  login(credenciales:any):Observable<any> {
    return this.cliente.post(this.url,credenciales, {observe: 'response'});
  }

}
