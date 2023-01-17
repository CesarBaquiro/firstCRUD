import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../Modelo/Usuario';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
})
export class RegistrosComponent implements OnInit {
  //Arreglo de respuesta
  usuarios?: Usuario[];
  //Referencia al servicio
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUsuarios().subscribe((data) => {
      console.log((this.usuarios = data));
    });
  }
}
