import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  usuarioLogeado: any = null;
  isLogeado = false;
  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.changeLogged.subscribe({
      next: () => {
        this.validarIsLogged();
      }
    })
  }


  validarIsLogged() {
    this.isLogeado = this.usuarioService.isLoggedIn()
    if (this.isLogeado) {
      this.usuarioLogeado = this.usuarioService.getUsuario();
    }
  }

  salir() {
    debugger
    this.usuarioService.logout();
  }
}
