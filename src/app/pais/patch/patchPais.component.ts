import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from 'src/app/provincia/Provincia';
import { Pais } from 'src/app/pais/patch/Pais';

@Component({
  selector: 'app-patchPais',
  templateUrl: './patchPais.component.html',
  styleUrls: ['./patchPais.component.css']
})
export class patchPaisComponent {

  pais!: string;
  nuevoNombre!:string
  nombreProvincia!: string;
  constructor(private router: Router, private http: HttpClient) {
  }


  patchPais() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || "",
        });
    let provincia: Provincia={
      nombre: this.nombreProvincia
    }
    let body: Pais ={
      nombre: this.nuevoNombre,
      provincia: provincia
    }


    this.http.patch("/api/paises/" + this.pais, body,{ headers: _headers }).subscribe(
      response => {      
        console.log("Exito", response);
      },
      error => { 
        console.log(":(", error); 
      }
    )
  }
}