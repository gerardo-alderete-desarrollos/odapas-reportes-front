import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Reporte } from 'src/app/core/shared/interfaces/reporte.model';
import { ReporteService } from 'src/app/core/shared/services/reporte.service';
import { UsuarioService } from 'src/app/core/shared/services/usuario.service';





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

  tecnicos: Array<any> = [];


  tecnicoSeleccionado: number | null = null;
  notasAsignacion: string = '';
  usuarioLoggeado: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reporteService: ReporteService,
    private usuarioService: UsuarioService
  ) {
    this.usuarioLoggeado = usuarioService.getUsuario();
  }

  ngOnInit() {
    this.cargarReporte();
  }

  cargarReporte() {
    this.reporteId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.reporteId) {
      this.reporteService.getReporte(this.reporteId).subscribe({
        next: (resp) => {
          this.reporte = resp;

          console.log('Reporte cargado:', this.reporte);
              this.obtenerTecnicos();
        },
        error: (err) => {
          console.error('Error al obtener reportes:', err);
        }
      });
    }
  }

  obtenerTecnicos() {
    debugger
    this.usuarioService.getTecnicos(this.reporte?.area).subscribe({
      next: (resp) => {
        this.tecnicos = resp;

        console.log('Reporte cargado:', this.reporte);
      },
      error: (err) => {
        console.error('Error al obtener reportes:', err);
      }
    });
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

  estadoSeleccionado: string = '';
  notasEstado: string = '';

  actualizarEstado() {
    if (this.estadoSeleccionado && this.reporteId) {
      this.estadoSeleccionado && this.reporte;

      alert(`Estado actualizado ${this.reporte}`);

      //limpiar formulario

      this.notasEstado = '';
      this.estadoSeleccionado = '';
    } else {
      alert('por favor seleccionaun estado');
    }
  }


  volverALista() {
    this.router.navigate(['/reportes']);
  }
}


