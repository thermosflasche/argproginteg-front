import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor(private api: ApiService) { }
  estudioJson: any;
  sobremiJson: any;
  contactoJson: any;

  ngOnInit() {
    this.api.traer("estudio").subscribe(e => {
      console.log(e);
      this.estudioJson = e;
    });
    this.api.traer("sobremi").subscribe(s => {
      console.log(s);
      this.sobremiJson = s;
    });
    this.api.traer("contacto").subscribe(c => {
      console.log(c);
      this.contactoJson = c;
    });
  }

  tipo(valor: string): string {
    if (valor.startsWith("+")) {
      return "tel";
    } else if (valor.startsWith("http")) {
      return "url";
    } else return "";
  }

}
