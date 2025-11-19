import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './core/pages/reportes/reportes.component';
import { CallcenterComponent } from './core/pages/callcenter/callcenter.component';
import { DetalleReporteComponent } from './core/pages/reportes/pages/detalle-reporte/detalle-reporte.component';

const routes: Routes = [
  // Opción 1: Ruta principal redirige a /reportes
  {
    path: '',
    redirectTo: '/reportes',
    pathMatch: 'full'
  },
  {
    path: 'reportes',
    component: ReportesComponent
  },
  {
    path: 'callcenter',
    component: CallcenterComponent
  },
  {
    path: 'reporte/:id',
    component: DetalleReporteComponent
  },

  // Opción 2: Ruta principal muestra directamente el componente
  // {
  //   path: '',
  //   component: ReportesComponent
  // },

  // Ruta para páginas no encontradas (404)
  {
    path: '**',
    redirectTo: '/reportes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
