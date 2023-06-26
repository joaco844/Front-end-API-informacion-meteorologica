import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/pais/patch/Pais';
import { Provincia } from '../Provincia';
@Component({
  selector: 'app-putProvincia',
  templateUrl: './putProvincia.component.html',
  styleUrls: ['./putProvincia.component.css']
})
export class PutProvinciaComponent {
  pais!:string
  provincia!: any;
  ciudad!: any
  nuevoNombre!: string
  constructor(private router: Router, private http: HttpClient) {
  }

  PutProvincia() {
    const data: Provincia = {
      nombre: this.nuevoNombre,
      ciudad: this.ciudad
    }

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });

    this.http.put("/api/paises/" + this.pais + "/provincias/" + this.provincia, data, { headers: _headers}).subscribe(
      response => {
        console.log("Exito", response);
      },
      error => {
        console.log(":(", error);
      }
    )


  }

}
