import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
    standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ReportesComponent implements OnInit {

  constructor(private _router : Router){ }
datosOriginales: TablaItem[] = [
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
  {
    id: 2,
    folio: 'FOL-002',
    nombre: 'Ana Rodríguez Martínez',
    telefono: '555-987-6543',
    categoria: 'Recursos Humanos',
    subcategoria: 'Nómina',
    ubicacion: 'Edificio B, Piso 1',
    evidencia_url: 'https://ejemplo.com/evidencia2.pdf',
    estado: 'Pendiente',
    fecha: '2024-01-16',
    usuario_asignado: 'Carlos Ruiz',
    area: 'RH'
  },
  {
    id: 3,
    folio: 'FOL-003',
    nombre: 'Roberto Sánchez Jiménez',
    telefono: '555-456-7890',
    categoria: 'Mantenimiento',
    subcategoria: 'Electricidad',
    ubicacion: 'Edificio C, Piso 3',
    evidencia_url: 'https://ejemplo.com/evidencia3.jpg',
    estado: 'Completado',
    fecha: '2024-01-14',
    usuario_asignado: 'Pedro García',
    area: 'Mantenimiento'
  },
  {
    id: 4,
    folio: 'FOL-004',
    nombre: 'Laura Mendoza Cruz',
    telefono: '555-234-5678',
    categoria: 'Contabilidad',
    subcategoria: 'Facturación',
    ubicacion: 'Edificio A, Piso 1',
    evidencia_url: 'https://ejemplo.com/evidencia4.xlsx',
    estado: 'Activo',
    fecha: '2024-01-17',
    usuario_asignado: 'Sofia Torres',
    area: 'Finanzas'
  },
  {
    id: 5,
    folio: 'FOL-005',
    nombre: 'Miguel Ángel Vargas',
    telefono: '555-345-6789',
    categoria: 'Soporte Técnico',
    subcategoria: 'Software',
    ubicacion: 'Edificio D, Piso 2',
    evidencia_url: 'https://ejemplo.com/evidencia5.png',
    estado: 'Pendiente',
    fecha: '2024-01-18',
    usuario_asignado: 'Maria Lopez',
    area: 'TI'
  },
  {
    id: 6,
    folio: 'FOL-006',
    nombre: 'Carmen Silva Ortega',
    telefono: '555-876-5432',
    categoria: 'Recursos Humanos',
    subcategoria: 'Capacitación',
    ubicacion: 'Edificio B, Piso 2',
    evidencia_url: 'https://ejemplo.com/evidencia6.pdf',
    estado: 'Activo',
    fecha: '2024-01-13',
    usuario_asignado: 'Carlos Ruiz',
    area: 'RH'
  },
  {
    id: 7,
    folio: 'FOL-007',
    nombre: 'Diego Hernández Luna',
    telefono: '555-765-4321',
    categoria: 'Mantenimiento',
    subcategoria: 'Plomería',
    ubicacion: 'Edificio E, Piso 1',
    evidencia_url: 'https://ejemplo.com/evidencia7.jpg',
    estado: 'Completado',
    fecha: '2024-01-12',
    usuario_asignado: 'Pedro García',
    area: 'Mantenimiento'
  },
  {
    id: 8,
    folio: 'FOL-008',
    nombre: 'Elena Castro Ríos',
    telefono: '555-654-3210',
    categoria: 'Contabilidad',
    subcategoria: 'Auditoría',
    ubicacion: 'Edificio A, Piso 3',
    evidencia_url: 'https://ejemplo.com/evidencia8.docx',
    estado: 'Pendiente',
    fecha: '2024-01-19',
    usuario_asignado: 'Sofia Torres',
    area: 'Finanzas'
  },
  {
    id: 9,
    folio: 'FOL-009',
    nombre: 'Fernando Morales Díaz',
    telefono: '555-543-2109',
    categoria: 'Soporte Técnico',
    subcategoria: 'Redes',
    ubicacion: 'Edificio F, Piso 2',
    evidencia_url: 'https://ejemplo.com/evidencia9.jpg',
    estado: 'Activo',
    fecha: '2024-01-20',
    usuario_asignado: 'Maria Lopez',
    area: 'TI'
  },
  {
    id: 10,
    folio: 'FOL-010',
    nombre: 'Gabriela Núñez Reyes',
    telefono: '555-432-1098',
    categoria: 'Recursos Humanos',
    subcategoria: 'Reclutamiento',
    ubicacion: 'Edificio B, Piso 3',
    evidencia_url: 'https://ejemplo.com/evidencia10.pdf',
    estado: 'Completado',
    fecha: '2024-01-11',
    usuario_asignado: 'Carlos Ruiz',
    area: 'RH'
  },
  {
    id: 11,
    folio: 'FOL-011',
    nombre: 'Héctor Delgado Soto',
    telefono: '555-321-0987',
    categoria: 'Mantenimiento',
    subcategoria: 'Aire Acondicionado',
    ubicacion: 'Edificio G, Piso 1',
    evidencia_url: 'https://ejemplo.com/evidencia11.jpg',
    estado: 'Activo',
    fecha: '2024-01-21',
    usuario_asignado: 'Pedro García',
    area: 'Mantenimiento'
  },
  {
    id: 12,
    folio: 'FOL-012',
    nombre: 'Isabel Ramírez Meza',
    telefono: '555-210-9876',
    categoria: 'Contabilidad',
    subcategoria: 'Impuestos',
    ubicacion: 'Edificio A, Piso 4',
    evidencia_url: 'https://ejemplo.com/evidencia12.xlsx',
    estado: 'Pendiente',
    fecha: '2024-01-22',
    usuario_asignado: 'Sofia Torres',
    area: 'Finanzas'
  },
  {
    id: 13,
    folio: 'FOL-013',
    nombre: 'Javier Ortega Palma',
    telefono: '555-109-8765',
    categoria: 'Soporte Técnico',
    subcategoria: 'Seguridad',
    ubicacion: 'Edificio H, Piso 2',
    evidencia_url: 'https://ejemplo.com/evidencia13.png',
    estado: 'Completado',
    fecha: '2024-01-10',
    usuario_asignado: 'Maria Lopez',
    area: 'TI'
  },
  {
    id: 14,
    folio: 'FOL-014',
    nombre: 'Karla Juárez Montes',
    telefono: '555-098-7654',
    categoria: 'Recursos Humanos',
    subcategoria: 'Beneficios',
    ubicacion: 'Edificio B, Piso 4',
    evidencia_url: 'https://ejemplo.com/evidencia14.pdf',
    estado: 'Activo',
    fecha: '2024-01-23',
    usuario_asignado: 'Carlos Ruiz',
    area: 'RH'
  },
  {
    id: 15,
    folio: 'FOL-015',
    nombre: 'Luis Alberto Rojas',
    telefono: '555-987-0123',
    categoria: 'Mantenimiento',
    subcategoria: 'Jardinería',
    ubicacion: 'Área Exterior',
    evidencia_url: 'https://ejemplo.com/evidencia15.jpg',
    estado: 'Pendiente',
    fecha: '2024-01-24',
    usuario_asignado: 'Pedro García',
    area: 'Mantenimiento'
  },
  {
    id: 16,
    folio: 'FOL-016',
    nombre: 'Mariana Solís Vega',
    telefono: '555-876-9012',
    categoria: 'Contabilidad',
    subcategoria: 'Presupuesto',
    ubicacion: 'Edificio A, Piso 5',
    evidencia_url: 'https://ejemplo.com/evidencia16.docx',
    estado: 'Activo',
    fecha: '2024-01-09',
    usuario_asignado: 'Sofia Torres',
    area: 'Finanzas'
  },
  {
    id: 17,
    folio: 'FOL-017',
    nombre: 'Oscar Torres Mendoza',
    telefono: '555-765-8901',
    categoria: 'Soporte Técnico',
    subcategoria: 'Base de Datos',
    ubicacion: 'Edificio I, Piso 2',
    evidencia_url: 'https://ejemplo.com/evidencia17.jpg',
    estado: 'Completado',
    fecha: '2024-01-25',
    usuario_asignado: 'Maria Lopez',
    area: 'TI'
  },
  {
    id: 18,
    folio: 'FOL-018',
    nombre: 'Patricia León Guzmán',
    telefono: '555-654-7890',
    categoria: 'Recursos Humanos',
    subcategoria: 'Desarrollo Organizacional',
    ubicacion: 'Edificio B, Piso 5',
    evidencia_url: 'https://ejemplo.com/evidencia18.pdf',
    estado: 'Activo',
    fecha: '2024-01-08',
    usuario_asignado: 'Carlos Ruiz',
    area: 'RH'
  },
  {
    id: 19,
    folio: 'FOL-019',
    nombre: 'Ricardo Flores Navarro',
    telefono: '555-543-6789',
    categoria: 'Mantenimiento',
    subcategoria: 'Pintura',
    ubicacion: 'Edificio J, Piso 1',
    evidencia_url: 'https://ejemplo.com/evidencia19.jpg',
    estado: 'Pendiente',
    fecha: '2024-01-26',
    usuario_asignado: 'Pedro García',
    area: 'Mantenimiento'
  },
  {
    id: 20,
    folio: 'FOL-020',
    nombre: 'Sandra Cortés Romero',
    telefono: '555-432-5678',
    categoria: 'Contabilidad',
    subcategoria: 'Reportes Financieros',
    ubicacion: 'Edificio A, Piso 6',
    evidencia_url: 'https://ejemplo.com/evidencia20.xlsx',
    estado: 'Completado',
    fecha: '2024-01-07',
    usuario_asignado: 'Sofia Torres',
    area: 'Finanzas'
  }
];

  datosFiltrados: TablaItem[] = [];
  busqueda: string = '';
  columnaOrden!: keyof TablaItem ;
  ordenAscendente: boolean = true;

  ngOnInit() {
    this.datosFiltrados = [...this.datosOriginales];
  }

  filtrarDatos() {
    if (!this.busqueda) {
      this.datosFiltrados = [...this.datosOriginales];
    } else {
      const termino = this.busqueda.toLowerCase();
      this.datosFiltrados = this.datosOriginales.filter(item =>
        Object.values(item).some(valor => 
          valor?.toString().toLowerCase().includes(termino)
        )
      );
    }
    this.ordenarColumna(this.columnaOrden);
  }

  ordenarColumna(columna: keyof TablaItem ) {
    if (this.columnaOrden === columna) {
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      this.columnaOrden = columna;
      this.ordenAscendente = true;
    }

    this.datosFiltrados.sort((a, b) => {
      const valorA = a[columna];
      const valorB = b[columna];
      
      if (valorA < valorB) return this.ordenAscendente ? -1 : 1;
      if (valorA > valorB) return this.ordenAscendente ? 1 : -1;
      return 0;
    });
  }

  obtenerClaseOrden(columna: string): string {
    if (this.columnaOrden === columna) {
      return this.ordenAscendente ? 'ascendente' : 'descendente';
    }
    return '';
  }

  goToDetalleReporte(reporte: TablaItem) {
    debugger
    this._router.navigate(['reporte', reporte.id])
  }
}