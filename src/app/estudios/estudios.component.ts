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
  ngOnInit(): void {
    this.api.traer("estudio").subscribe(e => {
      this.json = e;
    });
  }
}
