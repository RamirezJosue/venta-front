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
  }


  cargarCategorias() {
    this._categoriaService.cargarCategorias()
            .subscribe( categorias => this.categorias = categorias );
  }

}
