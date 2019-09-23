import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave = '';
  progreso: number;
  progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;

  clase = "progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router, private usuarioService: UsuarioService) {
    this.progreso = 0;
    this.ProgresoDeAncho = "0%";

  }

  ngOnInit() {
  }

  Entrar() {
    this.usuarioService.loggear(this.usuario, this.clave).then(data => {
      this.router.navigate(['/Principal']);
    }).catch(error => {
      console.log(error);
    });
  }


  MoverBarraDeProgreso() {

    this.logeando = false;
    this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje = "NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso = this.progreso + 1;
      this.ProgresoDeAncho = this.progreso + 20 + "%";
      if (this.progreso == 100) {
        this.subscription.unsubscribe();
        this.Entrar();
      }
    });
    //this.logeando=true;
  }

}
