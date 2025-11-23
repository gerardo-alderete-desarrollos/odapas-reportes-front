import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallcenterComponent } from './core/pages/callcenter/callcenter.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BotonFlotanteComponent } from './core/shared/components/boton-flotante/boton-flotante.component';
import { VentanaAyudaComponent } from './core/shared/components/ventana-ayuda/ventana-ayuda.component';
import { AtencionClientesComponent } from './core/shared/components/atencion-clientes/atencion-clientes.component';
import { ComoPagarComponent } from './core/shared/components/como-pagar/como-pagar.component';
import { ResultadoReporteComponent } from './core/shared/components/resultado-reporte/resultado-reporte.component';
import { MenuAyudaComponent } from './core/shared/components/menu-ayuda/menu-ayuda.component';
import { ReporteCategoriasComponent } from './core/shared/components/reporte-categorias/reporte-categorias.component';
import { ReporteSubcategoriasComponent } from './core/shared/components/reporte-subcategorias/reporte-subcategorias.component';
import { FormularioReporteComponent } from './core/shared/components/formulario-reporte/formulario-reporte.component';
import { ConsultarReporteComponent } from './core/shared/components/consultar-reporte/consultar-reporte.component';
import { FormsModule } from '@angular/forms';
import { ResultadoFinalReporteComponent } from './core/shared/components/resultado-final-reporte/resultado-final-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    //ReportesComponent,
    CallcenterComponent,
    HeaderComponent,
    FooterComponent,
    BotonFlotanteComponent,
    VentanaAyudaComponent,
    AtencionClientesComponent,
    ComoPagarComponent,
    //ConsultarReportesComponent,
    ResultadoReporteComponent,
    ConsultarReporteComponent,
    MenuAyudaComponent,
    ReporteCategoriasComponent,
    ReporteSubcategoriasComponent,
    FormularioReporteComponent,
    ResultadoFinalReporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
