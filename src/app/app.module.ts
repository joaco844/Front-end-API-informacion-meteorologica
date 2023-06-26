import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisComponent } from './pais/pais.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { RegistrationFormComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppServiceService } from './app-service.service';
import { LoginComponent } from './login/login.component';
import { GetpaisComponent } from './pais/get/getpais.component';
import { getUnPais } from './pais/getPais/get.component';
import { BorrarPaisComponent } from './pais/delete/borrarPais.component';
import { patchPaisComponent } from './pais/patch/patchPais.component';
import { PutPaisComponent } from './pais/put/putPais.component';
import { PostPaisComponent } from './pais/post/postPais.component';
import { GetCiudadComponent } from './ciudad/get/getCiudad.component';
import { PostCiudadComponent } from './ciudad/post/postCiudad.component';
import { PutCiudadComponent } from './ciudad/put/putCiudad.component';
import { PatchCiudadComponent } from './ciudad/patch/patchCiudad.component';
import { DeleteCiudadComponent } from './ciudad/delete/deleteCiudad.component';
import { GetProvinciaComponent } from './provincia/get/getprovincia.component';
import { PostProvinciaComponent } from './provincia/post/postProvincia.component';
import { BorrarProvinciaComponent } from './provincia/delete/borrarProvincia.component';
import { patchProvinciaComponent } from './provincia/patch/patchProvincia.component';
import { GetPromedioComponent } from './pais/metodospersonalizados/temperaturaPromedio/getPromedio.component';
import { GetPromedioPaisComponent } from './pais/metodospersonalizados/temperaturaPromedioPais/GetPromedioPais.component';
import { getTemperaturaPromedioComponent } from './ciudad/Metodo Personalizado/getPromedioTemperatura/getTemperaturaPromedio.component';
import { PutProvinciaComponent } from './provincia/put/putProvincia.component';
import { GetPromedioProvinciaComponent } from './provincia/PromedioTemperaturaProvincia/getPromedioProvincia.component';
import { PostTiempoComponent } from './tiempo/postTiempo/postTiempo.component';
import { DeleteTiempoComponent } from './tiempo/deleteTiempo/deleteTiempo.component';
import { patchTiempoComponent } from './tiempo/patchTiempo/patchTiempo.component';
import { PutTiempoComponent } from './tiempo/putTiempo/putTiempo.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    ProvinciaComponent,
    CiudadComponent,
    TiempoComponent,
    RegistrationFormComponent,
    LoginComponent,
    GetpaisComponent,
    getUnPais,
    BorrarPaisComponent,
    patchPaisComponent,
    PostPaisComponent,
    PutPaisComponent,
    GetCiudadComponent,
    PostCiudadComponent,
    PutCiudadComponent,
    PatchCiudadComponent,
    DeleteCiudadComponent,
    GetPromedioComponent,
    GetPromedioPaisComponent,
    getTemperaturaPromedioComponent,
    GetProvinciaComponent,
    PostProvinciaComponent,
    BorrarProvinciaComponent,
    patchProvinciaComponent,
    PutProvinciaComponent,
    GetPromedioProvinciaComponent,
    PostTiempoComponent,
    DeleteTiempoComponent,
    patchTiempoComponent,
    PutTiempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
