import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CiudadComponent } from 'src/app/ciudad/ciudad.component';
import { Provincia } from 'src/app/provincia/Provincia';
import { Pais } from '../patch/Pais';

@Component({
  selector: 'app-postPais',
  templateUrl: './postPais.component.html',
  styleUrls: ['./postPais.component.css']
})
export class PostPaisComponent {

  
  PAIS!: string;
  provincia!: Provincia;

  constructor(private router: Router, private http: HttpClient) {
  }


  postPais() {

    const data: Pais = {
      nombre: this.PAIS,
      provincia: this.provincia
    }
    

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || " "
    });

    this.http.post("/api/paises", data, { headers: _headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
