import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ventana-ayuda',
  templateUrl: './ventana-ayuda.component.html',
  styleUrls: ['./ventana-ayuda.component.scss']
})
export class VentanaAyudaComponent {
  @Output() cerrar = new EventEmitter<void>();

  cerrarVentana() {
    this.cerrar.emit();
  }
}