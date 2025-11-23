import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Reporte } from '../interfaces/reporte.model';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private apiUrl = 'http://localhost:3000/reportes';

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  private getHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  getReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.apiUrl, this.getHeaders())
      .pipe(
        map((reportes) => {
          const usuarioLogeado: any = this.usuarioService.getUsuario();

          switch (usuarioLogeado.rol) {
            case "tecnico":
              return reportes.filter(r =>
                r.estado === "asignado" &&
                r.usuario_asignado === usuarioLogeado.email
              );

            case "callcenter":
              return reportes.filter(r => r.estado.includes("pendiente"));

            case "administrador":
              return reportes;

            default:
              return [];
          }
        })
      );
  }

  getReporte(id: number): Observable<Reporte> {
    return this.http.get<Reporte>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  createReporte(data: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(this.apiUrl, data, this.getHeaders());
  }

  updateReporte(id: number, data: Reporte): Observable<Reporte> {
    // 🔥 Reglas nuevas:
    // Solo asignar usuario si estado = asignado o completado
    if (data.estado === "asignado" || data.estado === "completado") {
    } else {
      // Cualquier otro estado debe limpiar asignación
      data.usuario_asignado = "";
    }

    return this.http.patch<Reporte>(`${this.apiUrl}/${id}`, data, this.getHeaders());
  }

  deleteReporte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getHeaders());
  }
}
