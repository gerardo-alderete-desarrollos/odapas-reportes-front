import { Component } from '@angular/core';

@Component({
  selector: 'app-atencion-clientes',
  templateUrl: './atencion-clientes.component.html',
  styleUrls: ['./atencion-clientes.component.scss']
})
export class AtencionClientesComponent {
  opciones = [
    'Consulta de adeudo',
    'Problemas con la factura o recibo',
    'Actualización de datos',
    'Solicitud de reconexión o suspensión del servicio'
  ];
}