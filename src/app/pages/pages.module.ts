
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CategoriaComponent } from './categoria/categoria.component';


// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { PersonaComponent } from './personas/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { ArticuloComponent } from './articulos/articulo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { IngresoComponent } from './ingresos/ingreso.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { VentaComponent } from './ventas/venta.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        CategoriaComponent,
        ModalUploadComponent,
        PersonaComponent,
        PersonasComponent,
        ArticuloComponent,
        ArticulosComponent,
        IngresoComponent,
        IngresosComponent,
        VentaComponent,
        VentasComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule,
        FormsModule,
        PipesModule
    ]
})
export class PagesModule { }
