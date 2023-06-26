import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { Usuario } from './Usuario';

import { FormsModule } from '@angular/forms';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-RegistrationFormComponent',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegistrationFormComponent {  
  
  user!: string;
  psw!: string;
  constructor(private router: Router, private http: HttpClient) {

  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  crearUsuario() {
    const data: Usuario = {
      nombre: this.user,
      psswrd: this.psw,
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post("/api/register", data, { headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      })
  }
}
