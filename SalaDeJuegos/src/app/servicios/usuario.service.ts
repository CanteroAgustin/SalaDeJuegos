import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service'
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miHttp: MiHttpService) { }

  url = "https://quiet-tor-05306.herokuapp.com/users"; 
  urlLocal = "http://localhost:3000/users";
  //public usuarioLogeado;
  public usuarioLogeado = null;
  
  getUsuarios(){
    return this.miHttp.httpGetO(this.url);
  }

  registrarUsuario(data){
    return this.miHttp.httpPostP(this.url,data);
  }

  getUsuarioLogeado(){
    return this.usuarioLogeado;
  }

  setUsuarioLogeado(usuario){
    this.usuarioLogeado = usuario;
    console.log(this.usuarioLogeado);
  }

  loggear(userName, password){
    let promise = new Promise((resolve, reject)=>{
      this.getUsuarios().subscribe(data => {
        let ok = false;
        for(let i=0; i < Object.keys(data).length; i++){
          if (userName === data[i].userName && password === data[i].password) {
            this.setUsuarioLogeado(data[i]);
            resolve(this.getUsuarioLogeado()),
            ok = true;
          }
        }
        if(!ok){
          reject(new Error("No se pudo loggear"));
        }
      });
    });
    return promise;
  }

  cargarFoto(foto){
    return this.miHttp.httpPostP(this.url+"/upload",foto);
  }

  deslogear(){
    this.usuarioLogeado = null;
  }
}
