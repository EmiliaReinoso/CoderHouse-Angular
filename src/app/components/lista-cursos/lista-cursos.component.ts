import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
  cursos: Curso [] = [
    {
      nombre: 'Angular',
      profesor: 'Carlos Garcia',
      estudiantes: ['Pablo', 'Marcos', 'Juan'],
      inscripcionAbierta: false
    },{
      nombre: 'React JS',
      profesor: 'Andres Lopez',
      estudiantes: ['Mateo', 'Federico', 'Nicolas'],
      inscripcionAbierta: true
    },{
      nombre: 'HTML',
      profesor: 'Diego Martinez',
      estudiantes: ['Juan', 'Lucas', 'Juan'],
      inscripcionAbierta: false
    },{
      nombre: 'Vue',
      profesor: 'Matias Gomez',
      estudiantes: [],
      inscripcionAbierta: true
    }
  ]
}
