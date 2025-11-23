import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Reporte } from 'src/app/core/shared/interfaces/reporte.model';
import { BitacoraService } from 'src/app/core/shared/services/bitacora.service';
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
  bitacora: any[] = []; // ← NUEVO

  tecnicos: Array<any> = [];


  tecnicoSeleccionado: string = '';
  estadoSeleccionado: string = '';
  notas: string = '';

  usuarioLoggeado: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reporteService: ReporteService,
    private usuarioService: UsuarioService,
    private bitacoraService: BitacoraService   // ← NUEVO

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
          this.obtenerTecnicos();
          this.cargarBitacora();   // ← NUEVO
        },
        error: (err) => console.error(err)
      });
    }
  }

  cargarBitacora() {
    if (!this.reporteId) return;

    this.bitacoraService.getByReporte(this.reporteId).subscribe({
      next: (resp) => {
        this.bitacora = resp.sort((a, b) => {
          return new Date(b.fecha_creacion).getTime() - new Date(a.fecha_creacion).getTime();
        });
      },
      error: (err) => console.error('Error cargando bitácora:', err)
    });
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
    debugger
    if (this.tecnicoSeleccionado && this.reporte) {

      this.reporte.estado = 'asignado';
      this.reporte.usuario_asignado = this.tecnicoSeleccionado;


      // Aquí iría la lógica para guardar la asignación
      this.reporteService.updateReporte(this.reporteId!, this.reporte).subscribe({

        next: (resp) => {
          alert('Tecnico asingando correctamente');
          this.volverALista();
          this.limpiarFormulario

        },
        error: (err) => {
          alert('Error al asignar tecnico');
        }
      });
    }
  }
  actualizarBitacora() {
    debugger
    if (this.estadoSeleccionado && this.reporte) {

      this.reporte.estado = this.estadoSeleccionado;

      // Aquí iría la lógica para guardar la asignación
      this.reporteService.updateReporte(this.reporteId!, this.reporte).subscribe({

        next: (resp) => {
          alert('Tecnico asingando correctamente');
          this.agregarBitacora();

        },
        error: (err) => {
          alert('Error al asignar tecnico');
        }
      });
    }
  }

  agregarBitacora() {
    debugger
    const bitacoraRequest = {
      comentario: this.notas,
      reporteId: this.reporteId
    }

    this.bitacoraService.createBitacora(bitacoraRequest).subscribe(
      {

        next: (resp) => {
          alert('Comentario agregado correctamente');
          this.cargarReporte();
          this.limpiarFormulario();

        },
        error: (err) => {
          alert('Error al agregar comentario a bitacora');
        }
      });
  }

  limpiarFormulario() {
    // Limpiar formulario
    this.tecnicoSeleccionado = "";
    this.notas = '';
    this.estadoSeleccionado = "";
  }

  actualizarEstado() {
    debugger
    if (this.estadoSeleccionado && this.reporteId) {
      this.estadoSeleccionado && this.reporte;

      alert(`Estado actualizado ${this.reporte}`);

      //limpiar formulario

      this.notas = '';
      this.estadoSeleccionado = '';
    } else {
      alert('por favor seleccionaun estado');
    }
  }


  volverALista() {
    this.router.navigate(['/reportes']);
  }

  onSubmit() {
    debugger

    if (this.usuarioLoggeado.rol === "tecnico") {
      this.actualizarBitacora();
    } else if (this.usuarioLoggeado.rol === "callcenter") {
      this.asignarTecnico();
    }
  }
}


