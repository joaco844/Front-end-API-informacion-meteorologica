import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from '../Ciudad';

@Component({
  selector: 'app-postCiudad',
  templateUrl: './postCiudad.component.html',
  styleUrls: ['./postCiudad.component.css']
})
export class PostCiudadComponent {
  tiempo!: any
  pais!: string
  provincia!: string
  ciudad!: string
  
  constructor(private router: Router, private http: HttpClient) {
  }

  postCiudad() {

    const data: Ciudad = {
      nombre: this.ciudad,
      registroTempreratura: this.tiempo
    }

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });

    this.http.post("/api/paises/" + this.pais + "/provincias/" + this.provincia + "/ciudades" , data, { headers: _headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
