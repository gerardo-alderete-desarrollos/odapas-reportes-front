import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../interfaces/reporte.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private apiUrl = 'http://localhost:3000/reportes'; // cambia la URL si es necesario

  constructor(private http: HttpClient) {}

  // Obtener todos los reportes
  getReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.apiUrl);
  }

  // Obtener un reporte por ID
  getReporte(id: number): Observable<Reporte> {
    return this.http.get<Reporte>(`${this.apiUrl}/${id}`);
  }

  // Crear reporte
  createReporte(data: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(this.apiUrl, data);
  }

  // Actualizar reporte
  updateReporte(id: number, data: Reporte): Observable<Reporte> {
    return this.http.put<Reporte>(`${this.apiUrl}/${id}`, data);
  }

  // Eliminar reporte
  deleteReporte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
