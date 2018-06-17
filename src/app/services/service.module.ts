import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  CategoriaService,
  SubirArchivoService,
  PersonaService,
  ArticuloService,
  IngresoService,
  VentaService
 } from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    CategoriaService,
    SubirArchivoService,
    PersonaService,
    ArticuloService,
    IngresoService,
    VentaService
  ],
  declarations: []
})
export class ServiceModule { }
