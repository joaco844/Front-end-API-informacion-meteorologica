import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getPromedioProvincia',
  templateUrl: './getPromedioProvincia.component.html',
  styleUrls: ['./getPromedioProvincia.component.css']
})
export class GetPromedioProvinciaComponent {
    paises!: JSON;
    pais!: string
    provincia!: string
  constructor(private http: HttpClient, private router: Router) {}

  getPromedioProv() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || ""
    });

    this.http.get("/api/temperaturaPromedio/paises/" + this.pais + "/provincias/"+ this.provincia ,{ headers: _headers }).subscribe(
      (response: any) => {
        console.log(response)   
        this.paises = response;
      },error => {
        console.log(error.message);
      }
    )
  }
}
