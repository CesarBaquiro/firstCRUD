import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './Usuario/agregar/agregar.component';
import { RegistrosComponent } from './Usuario/registros/registros.component';

//Rutas por las cuales se hace la navegacion de un componente a otro
const routes: Routes = [
  { path: 'agregar', component: AgregarComponent },
  { path: 'registros', component: RegistrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
