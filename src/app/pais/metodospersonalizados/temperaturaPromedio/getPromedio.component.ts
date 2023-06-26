import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getPromedio',
  templateUrl: './getPromedio.component.html',
  styleUrls: ['./getPromedio.component.css']
})
export class GetPromedioComponent {
    promedios!: JSON;
    pais!: string
    
  constructor(private http: HttpClient, private router: Router) {}

  getPromedio() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || ""
    });

    this.http.get("/api/temperaturaPromedio/paises",{ headers: _headers }).subscribe(
      (response: any) => {
        console.log(response)
        this.promedios = response;
      },error => {
        console.log(error.message);
      }
    )
  }
}
