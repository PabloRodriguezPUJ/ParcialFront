import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  libros: any[];

  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.obtenerLibros();
  }

  obtenerLibros() {
    this.libroService.obtenerLibros().subscribe(
      response => {
        this.libros = response;
      },
      error => {
        console.log('Error al obtener los libros:', error);
      }
    );
  }
}

