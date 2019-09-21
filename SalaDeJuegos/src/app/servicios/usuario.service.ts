import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miHttp: MiHttpService) { }

  url = "https://quiet-tor-05306.herokuapp.com/users"; 
  urlLocal = "http://localhost:3000/users";
  public usuarioLogeado;

  getUsuarios(){
    return this.miHttp.httpGetO(this.url);
  }

  registrarUsuario(data){
    return this.miHttp.httpPostP(this.url,data);
  }

  getUsuarioLoggeado(){
    return this.usuarioLogeado;
  }

  setUsuarioLoggeado(){
    this.usuarioLogeado = true;
  }

  cargarFoto(foto){
    console.log("llamando:"+this.urlLocal+"/upload");
    return this.miHttp.httpPostP(this.url+"/upload",foto);
  }

}
