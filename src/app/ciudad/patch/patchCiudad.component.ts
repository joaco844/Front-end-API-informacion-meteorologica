import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from '../Ciudad';


@Component({
  selector: 'app-PatchCiudad',
  templateUrl: './patchCiudad.component.html',
  styleUrls: ['./patchCiudad.component.css']
})
export class PatchCiudadComponent {
    pais!: string
    provincia!: string
    ciudad!: string
    tiempo: any;
  constructor(private router: Router, private http: HttpClient) {
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  patchCiudad() {
      const data: Ciudad = {
      nombre: this.ciudad,
      registroTempreratura: this.tiempo
    }

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });

    this.http.put("/api/pais" + this.pais + "/provincia/" + this.provincia + "/ciudad/" + this.ciudad, data, { headers: _headers }).subscribe(
      response => {
        console.log("Exito", response);
      },
      error => {
        console.log(":(", error);
      }
    )


  }

}
