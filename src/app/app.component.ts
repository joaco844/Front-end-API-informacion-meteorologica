import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'front-end-diaz-toledo';

  constructor(private service : AppServiceService){

  }

  
/*
ngOnInit(){
    this.getDataFromAPI();
  }
  getDataFromAPI(){
    this.service.getData().subscribe((response) => {
      console.log('Response', response)
  }, (error) => {
      console.log('Error is', error)
  })*/
  }

  

 

