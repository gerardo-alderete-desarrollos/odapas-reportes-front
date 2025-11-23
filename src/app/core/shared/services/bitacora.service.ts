import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BitacoraService {

    private apiUrl = 'http://localhost:3000/bitacora';

    constructor(private http: HttpClient) { }

    private getHeaders() {
        const token = localStorage.getItem('token');
        return {
            headers: new HttpHeaders({
                Authorization: `Bearer ${token}`
            })
        };
    }

    getByReporte(reporteId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/reporte/${reporteId}`, this.getHeaders());
    }

    // ➕ NUEVO: Crear bitácora
    createBitacora(data: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, data, this.getHeaders());
    }

}
