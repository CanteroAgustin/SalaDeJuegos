import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miHttp: MiHttpService) { }

  url = "https://quiet-tor-05306.herokuapp.com/users"; 

  getUsuarios(){
    this.miHttp.httpGetO(this.url).subscribe(data=>{
      console.log(data);
    });
  }
}
