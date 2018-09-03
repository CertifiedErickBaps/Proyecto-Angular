import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
    this.cargarIngo();
    this.cargarEquipo();
  }

  private cargarIngo() {
    // Leer el archivo JSON para leer sus propiedades
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-cfb96.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.cargada = true;
        this.equipo = resp;
        // console.log(resp);
      });
  }
}

