import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ArchivosJugadoresService {

  api="http://localhost:8080/jugadoresarchivo/apirestjugadores/";
  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    
  }

  public traerJugadores(ruta) {
    return this.miHttp.httpGetO(this.api+ruta)
    .subscribe( data => {
      console.log("Archivo jugadores");
     // console.log( data );
      return data;
    }, error => {
      console.log( error.json().error || 'Server error' );
    })  
  }
}
