import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../Provincia';


@Component({
  selector: 'app-borrarProvincia',
  templateUrl: './borrarProvincia.component.html',
  styleUrls: ['./borrarProvincia.component.css']
})
export class BorrarProvinciaComponent {
  pais!: string;
  nombreProvincia!:string

  constructor(private router: Router, private http: HttpClient) {
  }
  borrarProvincia() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || "",
      "nombre": this.pais
    });
    const body: Provincia={

    }
  
    this.http.delete("/api/paises/provincias", {headers: headers}).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
