import { Component } from '@angular/core';
import { ReporteService } from './core/shared/services/reporte.service';
import { Area } from './core/shared/enums/area.enum';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Controla si la ventana de ayuda está abierta
  ventanaAbierta: boolean = false;

  // Guarda qué vista se debe mostrar dentro de la ventana
  vistaActual: string = 'menu';
  // menu | reporte-categorias | reporte-subcategorias | formulario-reporte |
  // atencion | pagos | consulta-folio | resultado-consulta

  categoriaSeleccionada: any = null;
  subcategoriaSeleccionada: any = null;
  folioBuscado: string = '';
  reporte: any | null = null;

  constructor(private reporteService: ReporteService) { }

  // Abre o cierra la ventana flotante
  toggleVentana(event?: any) {
    debugger
    this.ventanaAbierta = !this.ventanaAbierta;
    if (!this.ventanaAbierta) {
      this.vistaActual = 'menu'; // al cerrar regresa al inicio
    }
  }

  // Cuando el usuario elige una opción principal
  seleccionarOpcion(opcion: any) {
    debugger
    this.vistaActual = opcion;
  }

  // Cuando el usuario elige una CATEGORÍA en el módulo de reportes
  onCategoriaSeleccionada(categoria: any) {
    this.categoriaSeleccionada = categoria;
    this.vistaActual = 'reporte-subcategorias';
  }

  // Cuando el usuario elige una SUBCATEGORÍA
  onSubcategoriaSeleccionada(subcategoria: any) {
    this.subcategoriaSeleccionada = subcategoria;
    this.vistaActual = 'formulario-reporte';
  }

  // Cuando el formulario de reporte se envía correctamente
  onReporteGuardado(event: any) {
    debugger
    const codigo = Math.floor(1000 + Math.random() * 9000);

    const reporteRequest = {
      folio: `Rep-${codigo}-${codigo}`,
      nombre: event.nombre,
      telefono: event.telefono,
      categoria: event.categoria,
      subcategoria: event.subcategoria,
      ubicacion: event.ubicacion,
      descripcion: '',
      evidencia_url: event.evidencia,
      estado: 'pendiente',
      fecha: new Date(),
      usuario_asignado: '',
      area: this.asignarArea(event.categoria),
    }
    this.crearReporte(reporteRequest);
  }

  asignarArea(categoria: string) {
    switch (categoria) {
      case "CHEQUEO TOMA DE AGUA":
        return Area.CHEQUEO_TOMA_AGUA;
      case "FUGA DE AGUA":
        return Area.FUGAS;
      case "DESAZOLVE":
        return Area.DESAZOLVE;
      case "CONSTRUCCIÓN":
        return Area.CONSTRUCCION;
      case "SUMINISTRO":
        return Area.SUMINISTRO;
      case "AGUA TURBIA":
        return Area.AGUA_TURBIA
      default:
        return '';
    }
  }

  // Para regresar a menú desde cualquier sección
  regresarAlMenu() {
    this.vistaActual = 'menu';
  }

  // Para buscar un reporte por folio
  buscarFolio(folio: any) {
    this.folioBuscado = folio;
    this.vistaActual = 'resultado-consulta';
  }

  // Crear reporte
  crearReporte(reporte: any) {
    this.reporteService.createReporte(reporte).subscribe({
      next: (data) => {
        console.log(data);
        this.vistaActual = 'resultado-reporte';
        this.reporte = data;
        Swal.fire('Exitoso', 'Reporte generado exitosamente', 'info');
      },
      error: (error) => {
        console.log(error);
        Swal.fire('Error', 'No se  genero reporte :' + error.error.message, 'info');
      }
    })
  }
}