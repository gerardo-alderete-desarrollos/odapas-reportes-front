import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reporte-categorias',
  templateUrl: './reporte-categorias.component.html',
  styleUrls: ['./reporte-categorias.component.scss'],
  // standalone: true,
  // imports: [CommonModule],
})
export class ReporteCategoriasComponent {
  @Output() categoriaSeleccionada = new EventEmitter<string>();

  categorias = [
    "Chequeo de agua",
    "Fuga de agua",
    "Desazolve",
    "Construcción",
    "Agua turbia"
  ];

  seleccionar(cat: string) {
    this.categoriaSeleccionada.emit(cat);
  }
}