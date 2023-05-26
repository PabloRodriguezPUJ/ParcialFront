import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libro } from '../model/libro.model';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  libro: Libro=new Libro();
  libros: Libro[]=[];
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

