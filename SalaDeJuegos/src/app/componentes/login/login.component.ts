import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { FormBuilder } from '@angular/forms';

import { AuthServiceService } from '../../servicios/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  progreso: number;
  progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;
  loginForm;

  clase = "progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private router: Router, private usuarioService: UsuarioService,
    private formBuilder: FormBuilder, private authServiceService: AuthServiceService) {
    this.progreso = 0;
    this.ProgresoDeAncho = "0%";
    this.loginForm = this.formBuilder.group({
      userName: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  Entrar(data) {
    this.usuarioService.loggear(data.usuario, data.clave).then(data => {
      this.authServiceService.setToken(JSON.stringify(data));
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/Principal']);
    }).catch(error => {
      console.log(error);
    });
  }

  login(datos) {
    this.usuarioService.loginEnBackend(datos).subscribe(token => {
      this.authServiceService.setToken(token);
      
      if(this.authServiceService.isValidToken()){
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('usuarioLogeado', datos.userName);
        this.router.navigate(['/Principal']);
      }     
    });
  }

  MoverBarraDeProgreso(data) {

    this.logeando = false;
    this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje = "NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso = this.progreso + 2;
      this.ProgresoDeAncho = this.progreso + 20 + "%";
      if (this.progreso == 100) {
        this.subscription.unsubscribe();
        this.login(data);
      }
    });
    //this.logeando=true;
  }

}
