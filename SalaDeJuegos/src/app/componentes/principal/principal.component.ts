import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  loggedIn = false;
  userName = "";

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
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
