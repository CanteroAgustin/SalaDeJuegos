import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miHttp: MiHttpService) { }

  url = "http://agustincantero.com/UtnFRA/Laboratorio4/ApiComanda";

  getUsuarios() {
    return this.miHttp.httpGetO(this.url + "/usuario");
  }

  registrarUsuario(data) {
    return this.miHttp.httpPostP(this.url, data);
  }

  getUsuarioLogeado() {
    return localStorage.getItem('usuarioLogeado');
  }

  getUsuarioLogeadoCompleto() {
    return localStorage.getItem('usuarioLogeadoCompleto');
  }

  loginEnBackend(loginData) {
    return this.miHttp.httpPostP(this.url + "/login", loginData);
  }

  cargarFoto(foto) {
    return this.miHttp.httpPostP(this.url + "/upload", foto);
  }

  deslogear() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('usuarioLogeado');
  }

  saveScore(jugador: number, trivia: number, adivina: number, ppp: number, velocidad: number, anagrama: number){
    let datos = {
      id: jugador,
      trivia: trivia,
      adivina: adivina,
      ppp: ppp,
      velocidad: velocidad,
      anagrama: anagrama
    }
    return this.miHttp.httpPut(this.url + "/usuario", datos);
  }
}
