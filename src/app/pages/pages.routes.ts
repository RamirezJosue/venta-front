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
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { UsuariosComponent } from './usuarios/usuarios.component';
=======
import { RegisterComponent } from '../login/register.component';
>>>>>>> 32676c6ac1e7c9f213b0d355b44d2255d4d86bdc


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
            { path: 'categorias', component: CategoriaComponent, data: { titulo: 'Mantenimiento de Categorias' } },
            { path: 'personas', component: PersonasComponent, data: { titulo: 'Mantenimiento de Personas' } },
            { path: 'persona/:id', component: PersonaComponent, data: { titulo: 'Actualizar Persona' } },
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            { path: 'articulos', component: ArticulosComponent, data: { titulo: 'Mantenimiento de Articulos' } },
            { path: 'articulo/:id', component: ArticuloComponent, data: { titulo: 'Actualizar Articulo' } },
            { path: 'ingresos', component: IngresosComponent, data: { titulo: 'Mantenimiento de Ingreso' } },
            { path: 'ingreso/:id', component: IngresoComponent, data: { titulo: 'Actualizar Ingreso' } },
            { path: 'usuarios', component: RegisterComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
