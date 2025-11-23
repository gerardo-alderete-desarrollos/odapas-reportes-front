import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reporte-subcategorias',
  templateUrl: './reporte-subcategorias.component.html',
  styleUrls: ['./reporte-subcategorias.component.scss'],
  // standalone: true,
  // imports: [CommonModule],
})
export class ReporteSubcategoriasComponent {

  @Input() categoria: string | null = null;
  @Output() subcategoriaSeleccionada = new EventEmitter<string>();

  subcategorias: any = {
    "Chequeo de agua": [
      "Presión baja",
      "Presión intermitente durante el día",
      "Presión baja desde hace más de 24hrs"
    ],
    "Fuga de agua": [
      "Fuga en la banqueta",
      "Fuga dentro del domicilio",
      "Fuga en toma principal",
      "Fuga de válvula de control",
      "Fuga de medidor"
    ],
    "Desazolve": [
      "Drenaje tapado en la calle",
      "Coladera destruida",
      "Alcantarilla con mal olor",
      "Acumulación de aguas negras",
      "Desbordamiento de drenajes"
    ],
    "Construcción": [
      "Socavón",
      "Bacheo",
      "Retiro de escombro",
      "Reubicación",
      "Conexión de drenaje y agua"
    ],
    "Agua turbia": [
      "Agua con color marrón",
      "Agua con olor extraño",
      "Agua con espuma o residuos",
      "Agua turbia al abrir la llave por primera vez"
    ]
  };

  seleccionar(sub: string) {
    this.subcategoriaSeleccionada.emit(sub);
  }
}
