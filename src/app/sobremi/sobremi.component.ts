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
  ngOnInit(): void {
    this.api.traer("sobremi").subscribe(s => {
      this.json = s;
    });
  }
}
