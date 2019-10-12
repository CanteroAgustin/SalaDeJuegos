import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  loggedIn = false;
  userName = "";

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    let logeado = this.usuarioService.getUsuarioLogeado();
    if (logeado) {
      this.loggedIn = true;
      this.userName = logeado;
    }
  }

  procesarCerrar() {
    this.loggedIn = false;
    this.usuarioService.deslogear();
    this.router.navigate(['/Principal']);
  }
}
