import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    public _categoriaService: CategoriaService,

  ) { }

  ngOnInit() {
    this.cargarCategorias();
  }

  buscarCategoria(){

  }
  cargarCategorias() {
    this._categoriaService.cargarCategorias()
            .subscribe( categorias => this.categorias = categorias );
  }

  guardarCategoria(){

  }

  borrarCategoria(){

  }

  crearCategoria(){

  }

}
