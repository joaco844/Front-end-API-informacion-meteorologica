import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getpais',
  templateUrl: './getpais.component.html',
  styleUrls: ['./getpais.component.css']
})
export class GetpaisComponent {
    paises!: JSON;
    pais!: string
    
  constructor(private http: HttpClient, private router: Router) {}

  getPais() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("Auth") || ""
    });

    this.http.get("/api/paises",{ headers: _headers }).subscribe(
      (response: any) => {
        console.log(response)
        this.paises = response;
      },error => {
        console.log(error.message);
      }
    )
  }
}
