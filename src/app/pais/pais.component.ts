import { Component } from '@angular/core';
import { ProvinciaComponent } from '../provincia/provincia.component';
import { OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent  {
  paises: Array<string>;
  provincias:Array<string>
  constructor(private serviceHttp : AppServiceService){
    this.paises = new Array()
    this.provincias = new Array()
  }
}
