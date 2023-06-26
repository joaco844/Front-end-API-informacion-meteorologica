import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from 'src/app/provincia/Provincia';
import { Pais } from 'src/app/pais/patch/Pais';
import { Tiempo } from '../Tiempo';

@Component({
  selector: 'app-patchTiempo',
  templateUrl: './patchTiempo.component.html',
  styleUrls: ['./patchTiempo.component.css']
})
export class patchTiempoComponent {
  fecha!: Date;
  grados!: number;
  pais!: string;
  provincia!: any;
  ciudad!: string;
  nuevaFecha!:Date
  nuevoGrados!:number
  
  constructor(private router: Router, private http: HttpClient) {
  }


  patchTiempo() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || "",
        });
    let provincia: Provincia={
      nombre: this.provincia
    }
    let body: Tiempo ={
      fecha: this.nuevaFecha,
      grados: this.nuevoGrados
    }
    let tiempo: Tiempo={
      fecha: this.fecha,
      grados: this.grados
    }


    this.http.patch("/api/paises/" + this.pais+ "/provincias/" + this.provincia + "/ciudades/" + this.ciudad+ "/tiempo/" + tiempo, body,{ headers: _headers }).subscribe(
      response => {      
        console.log("Exito", response);
      },
      error => { 
        console.log(":(", error); 
      }
    )
  }
}