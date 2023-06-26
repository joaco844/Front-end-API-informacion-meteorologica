import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getTemperaturaPromedio',
  templateUrl: './getTemperaturaPromedio.component.html',
  styleUrls: ['./getTemperaturaPromedio.component.css']
})
export class getTemperaturaPromedioComponent {
  pais!: string
  provincia!: string
  Ciudades!: JSON
  constructor(private http: HttpClient, private router: Router) {}

  getPromedioTemp() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });

    this.http.get("/api/temperaturaPromedio/paises/" + this.pais + "/provincias/" + this.provincia , { headers: _headers }).subscribe(
      (response: any) => {
        console.log(response)
        this.Ciudades = response
      },
      error => {
        console.log(error.message);
      }
    )
  }
}
