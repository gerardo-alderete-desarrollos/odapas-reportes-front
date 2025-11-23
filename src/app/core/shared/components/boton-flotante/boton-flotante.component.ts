import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-flotante',
  templateUrl: './boton-flotante.component.html',
  styleUrls: ['./boton-flotante.component.scss'],
})
export class BotonFlotanteComponent {
  @Output() abrirAyuda = new EventEmitter<void>();

  mostrarVentana() {
    this.abrirAyuda.emit();
  }
}