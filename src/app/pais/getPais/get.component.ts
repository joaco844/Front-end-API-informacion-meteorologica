import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getUnPais',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class getUnPais {
    paises!: any;
    pais!: string

  
  constructor(private http: HttpClient, private router: Router) {}

  getUnPais() {
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("Auth") || " "
    });
    this.http.get( "/api/paises/" + this.pais,{ headers: _headers }).subscribe(
      (response: any) => {
        console.log(response)
        this.paises = response;
      },error => {
        console.log(error.message);
      }
    )
  }
}
