import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-reporte',
  templateUrl: './consultar-reporte.component.html',
  styleUrls: ['./consultar-reporte.component.scss'],
  // standalone: true,
  // imports: [CommonModule, FormsModule],
})
export class ConsultarReporteComponent {
  folio = '';
  resultado: any = null;

  consultar() {
    // Aquí haces petición HTTP real
    this.resultado = {
      folio: this.folio,
      nombre: 'Carlos Pérez',
      telefono: '5511223344',
      categoria: 'Fuga de agua',
      ubicacion: 'Calle 123',
      fecha: '2025-01-10',
      estado: 'Asignado'
    };
  }

  descargarPDF() {
    alert("Aquí generas el PDF real");
  }
}
