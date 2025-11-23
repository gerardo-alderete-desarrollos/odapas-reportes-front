import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-ayuda',
  templateUrl: './menu-ayuda.component.html',
  styleUrls: ['./menu-ayuda.component.scss'],
  // standalone: true,
  // imports: [CommonModule],
})
export class MenuAyudaComponent {
  @Output() opcionSeleccionada = new EventEmitter<string>();

  seleccionar(opcion: string) {
    this.opcionSeleccionada.emit(opcion);
  }
}