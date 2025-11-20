import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Reporte } from 'src/app/core/shared/interfaces/reporte.model';
import { ReporteService } from 'src/app/core/shared/services/reporte.service';





interface Tecnico {
  id: number;
  nombre: string;
  especialidad: string;
  disponibilidad: string;
}

@Component({
  selector: 'app-detalle-reporte',
  templateUrl: './detalle-reporte.component.html',
  styleUrls: ['./detalle-reporte.component.scss'],
    standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class DetalleReporteComponent implements OnInit {
  reporteId: number | null = null;
  reporte: Reporte | null = null;
  
  tecnicos: Tecnico[] = [
    { id: 1, nombre: 'Juan Pérez García', especialidad: 'Hardware y Redes', disponibilidad: 'Disponible' },
    { id: 2, nombre: 'María López Hernández', especialidad: 'Software y Sistemas', disponibilidad: 'Disponible' },
    { id: 3, nombre: 'Carlos Rodríguez Silva', especialidad: 'Electricidad y Mantenimiento', disponibilidad: 'En trabajo' },
    { id: 4, nombre: 'Ana Martínez Cruz', especialidad: 'Soporte General', disponibilidad: 'Disponible' },
    { id: 5, nombre: 'Pedro Sánchez Díaz', especialidad: 'Redes y Comunicaciones', disponibilidad: 'Disponible' },
    { id: 6, nombre: 'Laura García Méndez', especialidad: 'Base de Datos', disponibilidad: 'En vacaciones' }
  ];

  tecnicoSeleccionado: number | null = null;
  notasAsignacion: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private reporteService: ReporteService
  ) {}

  ngOnInit() {
    this.cargarReporte();
  }

  cargarReporte() {
    debugger
        this.reporteId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.reporteId) {
      this.reporteService.getReporte(this.reporteId).subscribe({
      next: (resp) => {
        this.reporte = resp;

        console.log('Reporte cargado:', this.reporte);
      },
      error: (err) => {
        console.error('Error al obtener reportes:', err);
      }
    });
    }
  }

  asignarTecnico() {
    if (this.tecnicoSeleccionado && this.reporte) {
      const tecnico = this.tecnicos.find(t => t.id === this.tecnicoSeleccionado);
      
      // Aquí iría la lógica para guardar la asignación
      console.log('Asignando técnico:', {
        reporteId: this.reporte.id,
        tecnicoId: this.tecnicoSeleccionado,
        tecnico: tecnico?.nombre,
        notas: this.notasAsignacion
      });

      // Simular guardado exitoso
      alert(`Técnico ${tecnico?.nombre} asignado correctamente a la reporte ${this.reporte.folio}`);
      
      // Limpiar formulario
      this.tecnicoSeleccionado = null;
      this.notasAsignacion = '';
    }
  }

  volverALista() {
    this.router.navigate(['/']);
  }
}