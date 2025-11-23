import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  changeLogged: Subject<boolean> = new Subject<boolean>();

  private api = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient, private _router: Router) { }

  // -----------------------------------------
  // Registro
  // -----------------------------------------
  register(data: any): Observable<any> {
    return this.http.post(`${this.api}/register`, data);
  }

  // -----------------------------------------
  // Login
  // -----------------------------------------
  login(data: any): Observable<any> {
    return this.http.post(`${this.api}/login`, data).pipe(
      tap((res: any) => {
        if (res.access_token) {
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('usuario', JSON.stringify(res.usuario));
          this.changeLogged.next(true);
          this._router.navigate(['/reportes'])
        }
      })
    );
  }

  // -----------------------------------------
  // Obtener token
  // -----------------------------------------
  get token(): string | null {
    return localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Obtener usuario logeado
  getUsuario(): any {
    const userString = localStorage.getItem('usuario');
    if (!userString) return null;

    try {
      return JSON.parse(userString);
    } catch {
      return null;
    }
  }

  // Saber si está logeado
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  // -----------------------------------------
  // Headers con Bearer Token
  // -----------------------------------------
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  }

  // -----------------------------------------
  // Obtener usuario logueado (ruta protegida)
  // -----------------------------------------
  getPerfil(): Observable<any> {
    return this.http.get(`${this.api}/perfil`, {
      headers: this.getAuthHeaders()
    });
  }

  // -----------------------------------------
  // Obtener todos los usuarios (puede ser protegido)
  // -----------------------------------------
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.api}`, {
      headers: this.getAuthHeaders()
    });
  }
  // -----------------------------------------
  // Obtener todos los tecnicos por area
  // -----------------------------------------
  getTecnicos(area?: string): Observable<any> {
    debugger
    return this.http.get<any[]>(`${this.api}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      map((usuarios) => {
        debugger
        return usuarios.filter(u => u.rol === "tecnico" && u.area === area);
      })
    )
  }

  // -----------------------------------------
  // Cerrar sesión
  // -----------------------------------------
  logout() {
    debugger
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.changeLogged.next(true);
    this._router.navigate(['singin']);
  }
}
