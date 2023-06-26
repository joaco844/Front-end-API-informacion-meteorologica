import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getCiudad',
  templateUrl: './getCiudad.component.html',
  styleUrls: ['./getCiudad.component.css']
})
export class GetCiudadComponent {
  pais!: string
  provincia!: string
  ciudad!: string
  Ciudades!: any
  constructor(private http: HttpClient, private router: Router) {}

  getCiudad() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });

    this.http.get("/api/paises" + this.pais + "/provincias/" + this.provincia + "/ciudades/" + this.ciudad , { headers: _headers }).subscribe(
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
