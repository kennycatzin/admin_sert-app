import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Catálogos',
      icono: 'mdi mdi-book-open',
      submenu: [
        { titulo: 'Empresas', url: '/' },
        { titulo: 'Bancos', url: 'progress' },
        { titulo: 'Conceptos', url: 'grafica1' },
        { titulo: 'Ivas', url: 'grafica1' },
      ]
    },
    {
      titulo: 'Herramientas',
      icono: 'mdi mdi-settings',
      submenu: [
        { titulo: 'Cambio de empresa', url: '/' },
      ]
    },
    {
      titulo: 'Procesos',
      icono: 'mdi mdi-rotate-left-variant',
      submenu: [
        { titulo: 'Movimiento cuentas', url: 'movtos-cuentas' },
        { titulo: 'Captura de salidas', url: 'progress' },
      ]
    },
    {
      titulo: 'Reportes',
      icono: 'mdi mdi-file-document',
      submenu: [
        { titulo: 'Poliza contable', url: '/' },
        { titulo: 'Listado de bancos', url: 'progress' },
        { titulo: 'Listado de conceptos', url: 'grafica1' },
      ]
    },
  ];
  constructor() { }
}
// {
//   titulo: 'Usuarios',
//   icono: 'mdi mdi-chart-bubble',
//   url: '/usuarios'
// },
