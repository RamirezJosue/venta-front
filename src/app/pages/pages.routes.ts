import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { LoginGuardGuard } from '../services/service.index';
import { CategoriaComponent } from './categoria/categoria.component';
import { PersonaComponent } from './personas/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { ArticuloComponent } from './articulos/articulo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { IngresoComponent } from './ingresos/ingreso.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { VentaComponent } from './ventas/venta.component';
import { VentasComponent } from './ventas/ventas.component';
import { DetalleVentaComponent } from './detalleVentas/detalleVenta.component';
import { DetalleVentasComponent } from './detalleVentas/detalleVentas.component';
import { DetalleIngresoComponent } from './detalleIngresos/detalleIngreso.component';
import { DetalleIngresosComponent } from './detalleIngresos/detalleIngresos.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario.component';
import { UnidadmedidasComponent } from './unidadmedidas/unidadmedidas.component';
import { UnidadmedidaComponent } from './unidadmedidas/unidadmedida.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
            // Mantenimiento
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            { path: 'usuario/:id', component: UsuarioComponent, data: { titulo: 'Crear un nuevo Usuario' } },
            { path: 'personas', component: PersonasComponent, data: { titulo: 'Mantenimiento de Personas' } },
            { path: 'persona/:id', component: PersonaComponent, data: { titulo: 'Actualizar Persona' } },
            // Almacen
            { path: 'categorias', component: CategoriaComponent, data: { titulo: 'Mantenimiento de Categorias' } },
            { path: 'articulos', component: ArticulosComponent, data: { titulo: 'Mantenimiento de Articulos' } },
            { path: 'articulo/:id', component: ArticuloComponent, data: { titulo: 'Actualizar Articulo' } },
            { path: 'unidadmedidas', component: UnidadmedidasComponent, data: { titulo: 'Mantenimiento de Unidad de Medida' } },
            { path: 'unidadmedida/:id', component: UnidadmedidaComponent, data: { titulo: 'Nueva Unidad de Medida' } },
            // Compras
            { path: 'ingresos', component: IngresosComponent, data: { titulo: 'Mantenimiento de Ingreso' } },
            { path: 'ingreso/:id', component: IngresoComponent, data: { titulo: 'Actualizar Ingreso' } },
            { path: 'detalleIngresos', component: DetalleIngresosComponent, data: { titulo: 'Mantenimiento de DetalleIngreso' } },
            { path: 'detalleIngreso/:id', component: DetalleIngresoComponent, data: { titulo: 'Actualizar DetalleIngreso' } },
            // Ventas
            { path: 'ventas', component: VentasComponent, data: { titulo: 'Mantenimiento de Venta' } },
            { path: 'venta/:id', component: VentaComponent, data: { titulo: 'Actualizar Venta' } },
            { path: 'detalleVentas', component: DetalleVentasComponent, data: { titulo: 'Mantenimiento de DetalleVenta' } },
            { path: 'detalleVenta/:id', component: DetalleVentaComponent, data: { titulo: 'Actualizar DetalleVenta' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
