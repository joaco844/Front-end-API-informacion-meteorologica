import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/pais/patch/Pais';
import { Provincia } from 'src/app/provincia/Provincia';

@Component({
  selector: 'app-patchProvincia',
  templateUrl: './patchProvincia.component.html',
  styleUrls: ['./patchProvincia.component.css']
})
export class patchProvinciaComponent {

  provinica!: string;
  nuevoNombre!:string
  nombrePais!: string;
  constructor(private router: Router, private http: HttpClient) {
  }


  patchProvincia() {
    console.log(localStorage.getItem("Auth"))
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || "",
        });
    let provincia: Provincia={
      nombre: this.nuevoNombre
    }
    let body: Pais = {
      nombre: this.nuevoNombre,
    }


    this.http.patch("/api/paises/" + this.nombrePais + "/provincias/" + this.provinica, provincia ,{ headers: _headers }).subscribe(
      response => {      
        console.log("Exito", response);
      },
      error => { 
        console.log(":(", error); 
      }
    )
  }
}