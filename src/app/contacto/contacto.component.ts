import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  constructor(private api:ApiService){}
  json:any;

  tipo(valor: string): string {
    if (valor.search("@")>0){
      return "email";
    } else if (valor.startsWith("+")) {
      return "tel";
    } else if (valor.startsWith("http")) {
      return "url";
    } else return "";
  }
  
  ngOnInit(): void {
    this.api.traer("contacto").subscribe(c => {
      this.json = c;
    });
  }
}
