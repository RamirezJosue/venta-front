import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'RxJs', url: '/rxjs' }
      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Clientes', url: '/personas' },
        { titulo: 'Usuarios', url: '/usuarios' }
      ]
    },
    {
      titulo: 'Almacén',
      icono: 'mdi mdi-archive',
      submenu: [
        { titulo: 'Categorias', url: '/categorias' },
        { titulo: 'Articulos', url: '/articulos' },
        { titulo: 'Unidad de Medida', url: '/unidadmedidas' }
      ]
    },
    {
      titulo: 'Compras',
      icono: 'mdi mdi-square-inc-cash',
      submenu: [
        { titulo: 'Ingresos', url: '/ingresos' },
        { titulo: 'Detalle Ingresos', url: '/detalleIngresos' },
        { titulo: 'Proveedores', url: '/personas' },
      ]
    },
     {
      titulo: 'Ventas',
      icono: 'mdi mdi-shopping',
      submenu: [
        { titulo: 'Ventas', url: '/ventas' },
        { titulo: 'Detalle Ventas', url: '/detalleVentas' },
      ]
    }
  ];


  constructor() { }

}
