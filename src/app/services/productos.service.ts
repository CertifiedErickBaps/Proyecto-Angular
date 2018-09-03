import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];

  constructor( private hhtp: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {
    this.hhtp.get('https://angular-html-cfb96.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        console.log(resp);
        this.productos = resp;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      });
  }

}