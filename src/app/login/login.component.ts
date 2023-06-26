import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { tap } from 'rxjs/operators';
import { AppServiceService } from '../app-service.service';
import { Usuario } from '../register/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  user!: string;
  psw!: string;
  constructor(private router: Router, private service: AppServiceService, private http: HttpClient) {

  }

 goToPage(page: string) {
    this.router.navigate([page]);
  }

  login() {
    const data: Usuario = {
      nombre: this.user,
      psswrd: this.psw
        }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post("/api/login", data, {headers}).subscribe((response:any) => {
        console.log(response.Auth["token"]);
        localStorage.setItem("Auth", response.Auth["token"])
        console.log(localStorage.getItem("Auth"));
      },
      error => {
        console.log(error);
      })}
}
