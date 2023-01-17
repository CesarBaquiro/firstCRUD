import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  //Conexion con el Back-end
  Url = 'http://localhost:8080/usuario';

  //Metodo para traer todos los usuarios
  getUsuarios() {
    return this.http.get<Usuario[]>(this.Url);
  }
  //Metodo para agregar un usuario
  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.Url, usuario);
  }
}
