import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{
  constructor(private autenticacionServicio:AutenticacionService,
    private builder:FormBuilder,
    private ruta:Router){}
  ngOnInit(): void {}

  loginForm:FormGroup = this.builder.group({
    "email": ['',[Validators.required, Validators.email]],
    "password": ['',[Validators.required, Validators.minLength(8)]]
  });

  onSubmit(e:Event){
    e.preventDefault;
    this.autenticacionServicio.login(this.loginForm.value).subscribe((datos:Response)=>{
      // console.log(datos.headers.get("Authorization"));
      localStorage.setItem("u",datos.headers.get("Authorization")||"");
      this.ruta.navigate(['/portfolio']);
    })
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
}
