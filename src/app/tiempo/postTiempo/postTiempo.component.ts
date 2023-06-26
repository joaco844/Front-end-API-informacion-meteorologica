import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tiempo } from '../Tiempo';


@Component({
  selector: 'app-postTiempo',
  templateUrl: './postTiempo.component.html',
  styleUrls: ['./postTiempo.component.css']
})
export class PostTiempoComponent {
  fecha!: Date
  grados!: number
  pais!: string
  provincia!: string
  ciudad!: string
  
  constructor(private router: Router, private http: HttpClient) {
  }
  postTiemp() {

    const data: Tiempo = {
      fecha: this.fecha,
      grados: this.grados
    }

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });

    this.http.post("/api/paises" + this.pais + "/provincias/" + this.provincia + "/ciudades/" + this.ciudad + "/tiempo", data, { headers: _headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
