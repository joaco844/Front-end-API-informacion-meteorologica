import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../patch/Pais';

@Component({
  selector: 'app-putPais',
  templateUrl: './putPais.component.html',
  styleUrls: ['./putPais.component.css']
})
export class PutPaisComponent {
  pais!:string
  provincia!: any;
  constructor(private router: Router, private http: HttpClient) {
  }



  putPais() {
    
    const data: Pais = {
      nombre: this.pais,
      provincia: this.provincia
    }

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });

    this.http.put("/api/paises/" + this.pais, data, { headers: _headers}).subscribe(
      response => {
        console.log("Exito", response);
      },
      error => {
        console.log(":(", error);
      }
    )


  }

}
