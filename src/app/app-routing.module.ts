import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadComponent } from './ciudad/ciudad.component';
import { LoginComponent } from './login/login.component';
import { PaisComponent } from './pais/pais.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { RegistrationFormComponent } from './register/register.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { GetpaisComponent } from './pais/get/getpais.component';
import { getUnPais } from './pais/getPais/get.component';
import { BorrarPaisComponent } from './pais/delete/borrarPais.component';
import { patchTiempoComponent } from './tiempo/patchTiempo/patchTiempo.component';
import { PostPaisComponent } from './pais/post/postPais.component';
import { PutPaisComponent } from './pais/put/putPais.component';
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
import { AppModule } from './app.module';
import { PostTiempoComponent } from './tiempo/postTiempo/postTiempo.component';
import { DeleteTiempoComponent } from './tiempo/deleteTiempo/deleteTiempo.component';
import { patchPaisComponent } from './pais/patch/patchPais.component';
import { PutTiempoComponent } from './tiempo/putTiempo/putTiempo.component';

const routes: Routes = [
{
  path : "ciudad",
  component: CiudadComponent,
  title: "ciudad"
},
{
  path: "tiempo",
  component: TiempoComponent,
  title: "tiempo"
},
{
  path: "cuenta",
  component: RegistrationFormComponent,
  title: "cuenta"
},
{
  path: "pais",
  component: PaisComponent,
  title: "pais"
},
{
  path: "provincia",
  component: ProvinciaComponent,
  title: "provincia"
},
{
  path: "login",
  component: LoginComponent,
  title: "login"
},
{
path: "buscarPaises",
component: GetpaisComponent,
title: "bucarPaises"
},
{
  path: "buscarUnPais",
  component: getUnPais,
  title: "buscarUnPais"
},
{
  path: "borrarPais",
  component: BorrarPaisComponent,
  title: "borrarPais"
},
{
  path: "patchPais",
  component: patchPaisComponent,
  title: "patchPais"
},
{
  path: "postPais",
  component: PostPaisComponent,
  title: "postPais"
},
{
  path: "putPais",
  component: PutPaisComponent,
  title: "putPais"
},
{
  path: "getCiudad",
  component: GetCiudadComponent,
  title: "GetCiudad"
},
{
  path: "postCiudad",
  component: PostCiudadComponent,
  title: "postCiudad"
},
{
  path: "putCiudad",
  component: PutCiudadComponent,
  title: "putCiudad"
},
{
  path: "patchCiudad",
  component: PatchCiudadComponent,
  title: "patchCiudad"
},
{
  path: "getTemperaturaPromedio",
  component: getTemperaturaPromedioComponent,
  title: "getTemperaturaPromedio"
},
{
  path: "deleteCiudad",
  component: DeleteCiudadComponent,
  title: "deleteCidad"
},
{
  path: "getPromedio",
  component: GetPromedioComponent,
  title: "getPromedio"
},
{
  path: "getPromedioPais",
  component: GetPromedioPaisComponent,
  title: "GetPromedioPais"
},
{
  path: "getProvincia",
  component: GetProvinciaComponent,
  title: "getProvincia"
},
{
  path: "postProvincia",
  component: PostProvinciaComponent,
  title: "postProvincia"
},
{
  path: "borrarProvincia",
  component: BorrarProvinciaComponent,
  title: "borrarProvincia"
},
{
  path: "patchProvincia",
  component: patchProvinciaComponent,
  title: "patchProvincia"
},
{
  path: "putProvincia",
  component: PutProvinciaComponent,
  title: "PutProvincia"
},
{
  path: "getPromedioProvincia",
  component: GetPromedioProvinciaComponent,
  title: "getPromedioProvincia"
},
{
  path: "postTiempo",
  component: PostTiempoComponent,
  title: "postTiempo"
},
{
  path: "deleteTiempo",
  component: DeleteTiempoComponent,
  title: "deleteTiempo"
},
{
  path: "patchTiempo",
  component: patchTiempoComponent,
  title: "patchTiempo"
},
{
  path:"putTiempo",
  component: PutTiempoComponent,
  title:"put tiempo"
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
