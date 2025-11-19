import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


interface TablaItem {
  id: number;
  folio: string;
  nombre: string;
  telefono: string;
  categoria: string;
  subcategoria: string;
  ubicacion: string;
  evidencia_url: string;
  estado: string;
  fecha: string;
  usuario_asignado: string;
  area: string;
}


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
  solicitudId: number | null = null;
  solicitud: TablaItem | null = null;
  
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

  // Datos de ejemplo (deberían venir de un servicio)
  datosEjemplo: TablaItem[] = [
    {
      id: 1,
      folio: 'FOL-001',
      nombre: 'Juan Pérez García',
      telefono: '555-123-4567',
      categoria: 'Soporte Técnico',
      subcategoria: 'Hardware',
      ubicacion: 'Edificio A, Piso 2',
      evidencia_url: 'https://ejemplo.com/evidencia1.jpg',
      estado: 'Activo',
      fecha: '2024-01-15',
      usuario_asignado: 'Maria Lopez',
      area: 'TI'
    },
    // ... (incluir los otros 19 registros que te proporcioné anteriormente)
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarSolicitud();
  }

  cargarSolicitud() {
    debugger
        this.solicitudId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.solicitudId) {
      this.solicitud = this.datosEjemplo.find(item => item.id === this.solicitudId) || null;
      
      // Si no encuentra la solicitud, redirigir a la lista
      if (!this.solicitud) {
        this.router.navigate(['/']);
      }
    }
  }

  asignarTecnico() {
    if (this.tecnicoSeleccionado && this.solicitud) {
      const tecnico = this.tecnicos.find(t => t.id === this.tecnicoSeleccionado);
      
      // Aquí iría la lógica para guardar la asignación
      console.log('Asignando técnico:', {
        solicitudId: this.solicitud.id,
        tecnicoId: this.tecnicoSeleccionado,
        tecnico: tecnico?.nombre,
        notas: this.notasAsignacion
      });

      // Simular guardado exitoso
      alert(`Técnico ${tecnico?.nombre} asignado correctamente a la solicitud ${this.solicitud.folio}`);
      
      // Limpiar formulario
      this.tecnicoSeleccionado = null;
      this.notasAsignacion = '';
    }
  }

  volverALista() {
    this.router.navigate(['/']);
  }
}