import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './register/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }
  
}
