import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private miHttp: MiHttpService) { }

  //url = "https://quiet-tor-05306.herokuapp.com/users"; 
  url = "http://localhost/TP_FINAL_PROG3_CANTERO/usuario";
  
  getUsuarios(){
    return this.miHttp.httpGetO(this.url);
  }

  registrarUsuario(data){
    return this.miHttp.httpPostP(this.url,data);
  }

  getUsuarioLogeado(){
    return localStorage.getItem('usuarioLogeado');
  }

  loggear(userName, password){
    let promise = new Promise((resolve, reject)=>{
      this.getUsuarios().subscribe(data => {
        let ok = false;
        for(let i=0; i < Object.keys(data).length; i++){
          if (userName === data[i].userName && password === data[i].password) {
            localStorage.setItem('usuarioLogeado',data[i].nombre);
            let usuarioLogeado = this.getUsuarioLogeado();
            resolve(usuarioLogeado);
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
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('usuarioLogeado');
  }
}
