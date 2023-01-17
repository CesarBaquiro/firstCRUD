import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AgregarComponent } from './Usuario/agregar/agregar.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import { EliminarComponent } from './Usuario/eliminar/eliminar.component';
import { RegistrosComponent } from './Usuario/registros/registros.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceService } from '../app/Service/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    RegistrosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
