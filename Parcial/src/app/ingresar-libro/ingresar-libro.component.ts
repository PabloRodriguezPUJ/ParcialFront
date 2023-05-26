import { Component } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libro } from '../model/libro.model';

@Component({
  selector: 'app-ingresar-libro',
  templateUrl: './ingresar-libro.component.html',
  styleUrls: ['./ingresar-libro.component.css']
})
export class IngresarLibroComponent {
  libro: Libro=new Libro();
  constructor(private libroService: LibroService) { }

  guardarLibro() {
    const nuevoLibro = {
      console.log(this.libro);

      const libro = this.libro.id;
  
    // Llamar al servicio create para guardar la cancha
    this.libroService.create(this.libro).subscribe(response => {
      this.router.navigate(['']);
    });

      titulo: this.titulo,
      referencia: this.referencia,
      autor: this.autor,
      precio: this.precio,
      ubicacion: this.ubicacion
    };

    this.libroService.obtenerLibros(nuevoLibro).subscribe(
      response => {
        console.log('Libro guardado exitosamente:', response);
        // Aquí puedes agregar lógica adicional después de guardar el libro, como limpiar los campos del formulario o redirigir a otra página
      },
      error => {
        console.log('Error al guardar el libro:', error);
        // Aquí puedes manejar el error, mostrar un mensaje de error al usuario, etc.
      }
    );
  }
}
