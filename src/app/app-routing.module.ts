import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './core/pages/reportes/reportes.component';
import { CallcenterComponent } from './core/pages/callcenter/callcenter.component';
import { DetalleReporteComponent } from './core/pages/reportes/pages/detalle-reporte/detalle-reporte.component';
import { LoginComponent } from './core/pages/auth/login/login.component';
import { RegisterComponent } from './core/pages/auth/register/register.component';
import { AuthGuard } from './core/shared/guard/auth.guard';
import { NoAuthGuard } from './core/shared/guard/no-auth.guard';

const routes: Routes = [
  // Redirige a /signin
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },

  // Evitar que usuarios logueados entren a Login/Register
  {
    path: 'signin',
    //canActivate: [NoAuthGuard],
    component: LoginComponent
  },
  {
    path: 'signup',
    //canActivate: [NoAuthGuard],
    component: RegisterComponent
  },

  // Rutas protegidas con token
  {
    path: 'reportes',
    canActivate: [AuthGuard],
    component: ReportesComponent
  },
  {
    path: 'reporte/:id',
    canActivate: [AuthGuard],
    component: DetalleReporteComponent
  },

  // No protegida (si lo deseas puedes agregar guard)
  {
    path: 'callcenter',
    canActivate: [AuthGuard], // opcional
    component: CallcenterComponent
  },

  // Ruta 404
  {
    path: '**',
    redirectTo: 'signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
