import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WpUsermeta } from '../interfaces/wp-usermeta.model';

@Injectable({
  providedIn: 'root'
})
export class WpUsermetaService {

  private apiUrl = 'http://localhost:3000/wp-usermeta'; // ajusta si tu backend usa otra ruta

  constructor(private http: HttpClient) {}

  // Obtener toda la metadata
  getAll(): Observable<WpUsermeta[]> {
    return this.http.get<WpUsermeta[]>(this.apiUrl);
  }

  // Obtener metadata por ID
  getById(id: number): Observable<WpUsermeta> {
    return this.http.get<WpUsermeta>(`${this.apiUrl}/${id}`);
  }

  // Crear metadata
  create(data: WpUsermeta): Observable<WpUsermeta> {
    return this.http.post<WpUsermeta>(this.apiUrl, data);
  }

  // Actualizar metadata
  update(id: number, data: Partial<WpUsermeta>): Observable<WpUsermeta> {
    return this.http.put<WpUsermeta>(`${this.apiUrl}/${id}`, data);
  }

  // Eliminar metadata
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
