import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-GetPromedioPais',
  templateUrl: './GetPromedioPais.component.html',
  styleUrls: ['./GetPromedioPais.component.css']
})
export class GetPromedioPaisComponent{
    paises!: any;
    pais!: string

  
  constructor(private http: HttpClient, private router: Router) {}

  getPromedioPais() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });
    this.http.get( "/api/temperaturaPromedio/paises/" + this.pais,{ headers: _headers }).subscribe(
      (response: any) => {
        console.log(response)
        this.paises = response;
      },error => {
        console.log(error.message);
      }
    )
  }
}
