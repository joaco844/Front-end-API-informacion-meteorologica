import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../patch/Pais';

@Component({
  selector: 'app-borrarPais',
  templateUrl: './borrarPais.component.html',
  styleUrls: ['./borrarPais.component.css']
})
export class BorrarPaisComponent {
  pais!: string;


  constructor(private router: Router, private http: HttpClient) {
  }
  borrarPais() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token") || "",
      "nombre": this.pais
    });
   
    this.http.delete("/api/paises", {headers: headers}).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
