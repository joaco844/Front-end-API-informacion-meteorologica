import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deleteTiempo',
  templateUrl: './deleteTiempo.component.html',
  styleUrls: ['./deleteTiempo.component.css']
})
export class DeleteTiempoComponent {
  pais!: string;
  provincia!: string
  ciudad!: string

  constructor(private router: Router, private http: HttpClient) {
  }

  deleteTiempo() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });

    this.http.delete("/api/paises/" + this.pais + "/provincia/" + this.provincia + "/ciudad/" + this.ciudad + "/tiempo", { headers: headers },).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
