import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private cliente:HttpClient) { }
  url="https://argprog-backend.onrender.com/";

  traer(recurso:string):Observable<any>{
    return this.cliente.get(this.url + recurso + "/traer");
  }
}
