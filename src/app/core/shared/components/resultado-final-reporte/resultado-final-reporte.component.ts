import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resultado-final-reporte',
  templateUrl: './resultado-final-reporte.component.html',
  styleUrls: ['./resultado-final-reporte.component.scss']
})
export class ResultadoFinalReporteComponent {
  @Input() reporte!: any | null;

  @Output() finalizar = new EventEmitter<void>();
  today = new Date();

  cerrar() {
    this.finalizar.emit();
  }
}