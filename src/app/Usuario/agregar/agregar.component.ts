import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  public form!: FormGroup;
  public formController!: FormControl;
  nombreInput: string = '';
  emailInput: string = '';
  prioridadInput: number = 0;
  constructor(
    private router: Router,
    private service: ServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // let usuario1 = new Usuario(
    //   this.nombreInput,
    //   this.emailInput,
    //   this.prioridadInput
    // );
  }

  // initForm(): void {
  //   this.form = new FormGroup({
  //     nombre: new FormControl(),
  //     email: new FormControl(),
  //     prioridad: new FormControl(),
  //   });
  // }
}
