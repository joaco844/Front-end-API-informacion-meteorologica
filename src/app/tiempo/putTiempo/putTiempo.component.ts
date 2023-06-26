import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tiempo } from '../Tiempo';

@Component({
  selector: 'app-putTiempo',
  templateUrl: './putTiempo.component.html',
  styleUrls: ['./putTiempo.component.css']
})
export class PutTiempoComponent {
  pais!:string
  provincia!: any;
  ciudad!: string
  fecha!: Date
  grado!: number
  nuevaFecha!:Date
  nuevoGrados!: number
  
  constructor(private router: Router, private http: HttpClient) {
  }

  putTiempo() {
    
    const data: Tiempo = {
      fecha: this.nuevaFecha,
      grados: this.nuevoGrados
    }

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });
    let tiempo: Tiempo= {
      fecha: this.fecha,
      grados: this.grado
    }
    this.http.put("/api/paises/" + this.pais + "/provincias/" + this.provincia + "/ciudades/" + this.ciudad + "/tiempo/" + tiempo, data, { headers: _headers}).subscribe(
      response => {
        console.log("Exito", response);
      },
      error => {
        console.log(":(", error);
      }
    )


  }

}
