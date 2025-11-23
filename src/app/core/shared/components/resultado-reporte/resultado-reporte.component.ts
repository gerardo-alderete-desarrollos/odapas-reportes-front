import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado-reporte',
  templateUrl: './resultado-reporte.component.html',
  styleUrls: ['./resultado-reporte.component.scss']
})
export class ResultadoReporteComponent {
  @Input() reporte: any | null = null;    // <-- NECESARIO
  @Output() regresar = new EventEmitter<void>(); // <-- SI USAS (regresar)="..."

  ngOnInit(): void {

  }

  descargarPDF() {
    alert('PDF generado');
  }

  volverAlMenu() {
    this.regresar.emit();
  }
}