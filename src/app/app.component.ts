import { Component } from '@angular/core';
import { Curso } from './models/curso';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioLogueado: Usuario = {
    nombre: 'Emilia',
    contrasena: '123456',
    admin: true
  }


}
