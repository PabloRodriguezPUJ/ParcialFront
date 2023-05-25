import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-libro',
  templateUrl: './ingresar-libro.component.html',
  styleUrls: ['./ingresar-libro.component.css']
})
export class IngresarLibroComponent {
  titulo: string;
  referencia: string;
  autor: string;
  precio: number;
  ubicacion: string;

  guardarLibro() {
    // Aquí puedes llamar a un servicio para enviar los datos del libro al backend
  }
}
