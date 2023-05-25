import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = 'http:/localhost:8080/api/libros'; 

  constructor(private http: HttpClient) { }

  obtenerLibros() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
