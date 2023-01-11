import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  constructor(private api: ApiService) { }
  json:any;
  cargando:boolean=true;
  ngOnInit(): void {
    this.api.traer("estudio").subscribe({
      next: e => { this.json = e; },
      complete: () => { this.cargando = false }});
  }
}
