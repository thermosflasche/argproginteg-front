import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobreMiComponent implements OnInit{
  constructor(private api: ApiService) { }
  json:any;
  cargando:boolean=true;
  ngOnInit(): void {
    this.api.traer("sobremi").subscribe({
      next: s => { this.json = s; },
      complete: () => { this.cargando = false },
      error: (c:Response) => { if (c.status == 403){
        localStorage.removeItem("u");
        location.reload();
      }}})}
}
