import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallcenterComponent } from './core/pages/callcenter/callcenter.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { ReportesComponent } from './core/pages/reportes/reportes.component';
import { DetalleReporteComponent } from './core/pages/reportes/pages/detalle-reporte/detalle-reporte.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //ReportesComponent,
    CallcenterComponent,
    HeaderComponent,
    FooterComponent,
    //DetalleReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
