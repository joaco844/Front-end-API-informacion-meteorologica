import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getprovincia',
  templateUrl: './getprovincia.component.html',
  styleUrls: ['./getprovincia.component.css']
})
export class GetProvinciaComponent {
    paises!: JSON;
    pais!: string
    provincia!: string
  constructor(private http: HttpClient, private router: Router) {}

  getProvincia() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || ""
    });

    this.http.get("/api/paises/" + this.pais + "/provincias/"+ this.provincia ,{ headers: _headers }).subscribe(
      (response: any) => {
        console.log(response)   
        this.paises = response;
      },error => {
        console.log(error.message);
      }
    )
  }
}
