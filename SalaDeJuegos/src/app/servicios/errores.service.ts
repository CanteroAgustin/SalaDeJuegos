import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErroresService {

  constructor() { }

  private mensaje: string;

  setMensaje(mensaje: string){
    this.mensaje = mensaje;
  }

  getMensaje(){
    return this.mensaje;
  }

}
