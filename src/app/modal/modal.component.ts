import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../modal.service';

// Componente que muestra el modal
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // variable que almacena un observable de tipo booleano
  ver$ = new Observable<boolean>;
  // se construye con un servicio Modal
  constructor(
    private serv:ModalService
  ){}
  // se almacena el observable en la variable ver$ del componente
  ngOnInit(){
    this.ver$ = this.serv.ver();
  }
  // se implementa para alternar el valor desde el componente
  alternar(){
    this.serv.alternar();
  }
}
