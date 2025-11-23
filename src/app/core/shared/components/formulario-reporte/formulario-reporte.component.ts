import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reporte',
  templateUrl: './formulario-reporte.component.html',
  styleUrls: ['./formulario-reporte.component.scss'],
  // standalone: true,
  // imports: [CommonModule, FormsModule],
})
export class FormularioReporteComponent {
  @Input() categoria!: string;
  @Input() subcategoria!: string;

  @Output() enviar = new EventEmitter<any>();

  nombre = '';
  telefono = '';
  ubicacion = '';
  evidencia: File | null = null;

  onFile(event: any) {
    this.evidencia = event.target.files[0];
  }

  enviarFormulario() {
    this.enviar.emit({
      categoria: this.categoria,
      subcategoria: this.subcategoria,
      nombre: this.nombre,
      telefono: this.telefono,
      ubicacion: this.ubicacion,
      evidencia: this.evidencia
    });
  }
}