import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WpUser } from '../interfaces/wp-user.model';

@Injectable({
  providedIn: 'root'
})
export class WpUsersService {

  private apiUrl = 'http://localhost:3000/wp-users'; // cambia según tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsers(): Observable<WpUser[]> {
    return this.http.get<WpUser[]>(this.apiUrl);
  }

  // Obtener un usuario por ID
  getUser(id: number): Observable<WpUser> {
    return this.http.get<WpUser>(`${this.apiUrl}/${id}`);
  }

  // Crear un usuario
  createUser(data: WpUser): Observable<WpUser> {
    return this.http.post<WpUser>(this.apiUrl, data);
  }

  // Actualizar usuario
  updateUser(id: number, data: Partial<WpUser>): Observable<WpUser> {
    return this.http.put<WpUser>(`${this.apiUrl}/${id}`, data);
  }

  // Eliminar usuario
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
