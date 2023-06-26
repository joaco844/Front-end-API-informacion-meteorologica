import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from 'src/app/provincia/Provincia';
import { Ciudad } from 'src/app/ciudad/Ciudad';

@Component({
  selector: 'app-postProvincia',
  templateUrl: './postProvincia.component.html',
  styleUrls: ['./postProvincia.component.css']
})
export class PostProvinciaComponent {

  PAIS!: string;
  ciudad!: Ciudad;
  provincia!: string

  constructor(private router: Router, private http: HttpClient) {
  }

  postProvincia() {
    const data: Provincia = {
      nombre: this.PAIS,
      ciudad: this.ciudad
    }

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || " "
    });

    this.http.post("/api/paises/"+ this.PAIS + "/provincias", data, { headers: _headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
