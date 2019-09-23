import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  loggedIn = false;
  userName = "";

  constructor(private usuarioService: UsuarioService) { }

  
  ngOnInit() {
    let logeado = this.usuarioService.getUsuarioLogeado();
    if (logeado) {
      this.loggedIn = true;
      this.userName = logeado.userName;
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  procesarCerrar(){
    this.loggedIn = false;
    this.usuarioService.deslogear();
  }

}
