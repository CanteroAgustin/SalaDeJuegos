import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { UsuarioService } from '../../servicios/usuario.service';
import { ErroresService } from '../../servicios/errores.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  msjError: string;
  loggedIn = false;
  userName = "";

  constructor( private usuarioService: UsuarioService, private router: Router,
    private erroresService: ErroresService) { }

  ngOnInit() {
    this.msjError = this.erroresService.getMensaje();
    let logeado = this.usuarioService.getUsuarioLogeado();
    if (logeado) {
      this.loggedIn = true;
      this.userName = logeado;
    }
  }

  procesarCerrar(){
    this.loggedIn = false;
    this.usuarioService.deslogear();
    this.router.navigate(['/Principal']);
  }
}
