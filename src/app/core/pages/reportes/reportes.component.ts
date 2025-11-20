import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Reporte } from '../../shared/interfaces/reporte.model';
import { ReporteService } from '../../shared/services/reporte.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
    standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ReportesComponent implements OnInit {

  constructor(private _router : Router, private reporteService: ReporteService){ }
  reportes: Reporte[] = [];

  datosFiltrados: Reporte[] = [];
  busqueda: string = '';
  columnaOrden!: keyof Reporte ;
  ordenAscendente: boolean = true;

  ngOnInit() {
    this.cargarReportes(); 
  }

  cargarReportes(): void {
    this.reporteService.getReportes().subscribe({
      next: (resp) => {
        this.reportes = resp;
        this.datosFiltrados = [...this.reportes];

        console.log('Reportes cargados:', this.reportes);
      },
      error: (err) => {
        console.error('Error al obtener reportes:', err);
      }
    });
  }

  filtrarDatos() {
    if (!this.busqueda) {
      this.datosFiltrados = [...this.reportes];
    } else {
      const termino = this.busqueda.toLowerCase();
      this.datosFiltrados = this.reportes.filter(item =>
        Object.values(item).some(valor => 
          valor?.toString().toLowerCase().includes(termino)
        )
      );
    }
    this.ordenarColumna(this.columnaOrden);
  }

  ordenarColumna(columna: keyof Reporte ) {
    if (this.columnaOrden === columna) {
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      this.columnaOrden = columna;
      this.ordenAscendente = true;
    }

    this.datosFiltrados.sort((a, b) => {
      const valorA = a[columna];
      const valorB = b[columna];

      // Manejar null/undefined explícitamente
      if (valorA == null && valorB == null) return 0;
      if (valorA == null) return this.ordenAscendente ? -1 : 1;
      if (valorB == null) return this.ordenAscendente ? 1 : -1;

      // Comparar como números si ambos son numéricos, si no comparar como cadenas
      const aStr = String(valorA).trim().toLowerCase();
      const bStr = String(valorB).trim().toLowerCase();

      const numA = parseFloat(aStr);
      const numB = parseFloat(bStr);
      const ambosNumericos = !isNaN(numA) && !isNaN(numB);

      if (ambosNumericos) {
        if (numA < numB) return this.ordenAscendente ? -1 : 1;
        if (numA > numB) return this.ordenAscendente ? 1 : -1;
        return 0;
      }

      const comparacion = aStr.localeCompare(bStr);
      return this.ordenAscendente ? comparacion : -comparacion;
    });
  }

  obtenerClaseOrden(columna: string): string {
    if (this.columnaOrden === columna) {
      return this.ordenAscendente ? 'ascendente' : 'descendente';
    }
    return '';
  }

  goToDetalleReporte(reporte: Reporte) {
    debugger
    this._router.navigate(['reporte', reporte.id])
  }
}