import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deleteCiudad',
  templateUrl: './deleteCiudad.component.html',
  styleUrls: ['./deleteCiudad.component.css']
})
export class DeleteCiudadComponent {
  pais!: string;
  provincia!: string
  ciudad!: string

  constructor(private router: Router, private http: HttpClient) {
  }

  deleteCiudad() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });

    this.http.delete("/api/pais" + this.pais + "/provincia/" + this.provincia + "/ciudad/", { headers },).subscribe(
      response => {
        console.log(response);
        localStorage.setItem("token", String(response))
      },
      error => {
        console.log(error);
      }
    )
  }
}
